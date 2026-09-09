import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

import Navbar from '../components/ui/navbar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Laboratorios FIEE UNCP',
  description: 'Galería de laboratorios de la Facultad de Ingeniería Eléctrica de la UNCP.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} antialiased bg-[var(--background)] text-[var(--foreground)] min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1 container mx-auto w-full px-2 sm:px-4 md:px-8">
          {children}
        </main>
        <footer className="w-full bg-[var(--primary)] text-[var(--primary-foreground)] py-6 mt-8 text-center font-medium text-sm md:text-base">
          Facultad de Ingeniería Eléctrica - UNCP © {new Date().getFullYear()}
        </footer>
        <SpeedInsights />
      </body>
    </html>
  );
}
