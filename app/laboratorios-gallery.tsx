'use client';

import { useEffect, useState } from 'react';
import type { Laboratorio } from '@/lib/laboratorios';

type GalleryImage = { id: string; name: string; src: string };

export function LaboratoriosGallery({ laboratorios }: { laboratorios: Laboratorio[] }) {
  const [selected, setSelected] = useState(laboratorios[0]);
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [configured, setConfigured] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setActiveIndex(0);
    fetch(`/api/laboratorios/${selected.slug}`)
      .then((response) => response.json())
      .then((data: { images?: GalleryImage[]; configured?: boolean }) => {
        if (!cancelled) {
          setImages(data.images ?? []);
          setConfigured(data.configured ?? false);
        }
      })
      .catch(() => { if (!cancelled) setImages([]); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [selected]);

  const activeImage = images[activeIndex];
  const move = (direction: number) => setActiveIndex((index) => (index + direction + images.length) % images.length);

  return (
    <section className="w-full max-w-6xl" aria-label="Galería de laboratorios">
      <div className="flex flex-wrap justify-center gap-3">
        {laboratorios.map((laboratorio) => (
          <button key={laboratorio.slug} type="button" onClick={() => setSelected(laboratorio)} className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${selected.slug === laboratorio.slug ? 'border-[var(--primary)] bg-[var(--primary)] text-white shadow-md' : 'border-[var(--border)] bg-white text-[var(--foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)]'}`}>
            {laboratorio.name}
          </button>
        ))}
      </div>

      <div className="mt-10 overflow-hidden rounded-3xl border border-[var(--border)] bg-white shadow-xl">
        <div className="flex items-center justify-between gap-4 border-b border-[var(--border)] px-5 py-4 sm:px-8">
          <h2 className="text-xl font-bold text-[var(--primary)] sm:text-2xl">{selected.name}</h2>
          <a href={selected.folderUrl} target="_blank" rel="noreferrer" className="text-sm font-semibold text-[var(--primary)] hover:underline">Abrir carpeta</a>
        </div>
        <div className="relative aspect-[4/3] w-full bg-slate-100">
          {loading ? <p className="absolute inset-0 grid place-items-center text-slate-500">Cargando imágenes...</p> : activeImage ? <img src={activeImage.src} alt={activeImage.name} className="h-full w-full object-cover" /> : <div className="absolute inset-0 grid place-items-center p-8 text-center text-slate-500">{configured ? 'Esta carpeta no contiene imágenes visibles.' : 'Configura GOOGLE_DRIVE_API_KEY para cargar automáticamente las imágenes de Drive.'}</div>}
          {images.length > 1 && <><button type="button" aria-label="Imagen anterior" onClick={() => move(-1)} className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-2xl shadow">‹</button><button type="button" aria-label="Imagen siguiente" onClick={() => move(1)} className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-2xl shadow">›</button></>}
        </div>
        {images.length > 1 && <div className="flex justify-center gap-2 p-4">{images.map((image, index) => <button key={image.id} type="button" aria-label={`Ver imagen ${index + 1}`} onClick={() => setActiveIndex(index)} className={`h-2 rounded-full transition-all ${index === activeIndex ? 'w-8 bg-[var(--primary)]' : 'w-2 bg-slate-300'}`} />)}</div>}
      </div>
    </section>
  );
}