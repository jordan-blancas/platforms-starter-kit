import { NextResponse } from 'next/server';
import { laboratorios } from '@/lib/laboratorios';

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const laboratorio = laboratorios.find((item) => item.slug === slug);
  if (!laboratorio) return NextResponse.json({ error: 'Laboratorio no encontrado.' }, { status: 404 });

  const apiKey = process.env.GOOGLE_DRIVE_API_KEY;
  if (!apiKey) return NextResponse.json({ images: [], folderUrl: laboratorio.folderUrl, configured: false });

  const query = encodeURIComponent(`'${laboratorio.folderId}' in parents and trashed = false and mimeType contains 'image/'`);
  const fields = encodeURIComponent('files(id,name,mimeType,thumbnailLink,webContentLink)');
  const response = await fetch(`https://www.googleapis.com/drive/v3/files?q=${query}&key=${apiKey}&orderBy=name&pageSize=100&fields=${fields}`, { cache: 'no-store' });
  if (!response.ok) return NextResponse.json({ error: 'No fue posible leer esta carpeta de Drive.' }, { status: 502 });

  const data = await response.json();
  return NextResponse.json({
    configured: true,
    folderUrl: laboratorio.folderUrl,
    images: (data.files ?? []).map((file: { id: string; name: string; thumbnailLink?: string }) => ({
      id: file.id,
      name: file.name,
      src: file.thumbnailLink?.replace(/=s\d+/, '=s1600') ?? `https://drive.google.com/thumbnail?id=${file.id}&sz=w1600`,
    })),
  });
}