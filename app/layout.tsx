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
  title: 'Platforms Starter Kit',
  description: 'Next.js template for building a multi-tenant SaaS.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased bg-[var(--background)] text-[var(--foreground)] min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1 container mx-auto w-full px-4">
          {children}
        </main>
        <footer className="w-full bg-[var(--primary)] text-[var(--primary-foreground)] py-6 mt-8 text-center font-medium">
          Facultad de Ingeniería Eléctrica - UNCP © {new Date().getFullYear()}
        </footer>
        <SpeedInsights />
      </body>
    </html>
  );
}
