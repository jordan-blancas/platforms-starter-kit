import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/facultad', label: 'Facultad' },
  { href: '/posgrado', label: 'Posgrado' },
  { href: '/eventos', label: 'Eventos' },
  { href: '/investigacion', label: 'Investigación' },
  { href: '/acreditacion', label: 'Acreditación' },
  { href: '/infraestructura', label: 'Infraestructura' },
  { href: '/bolsa-trabajo', label: 'Bolsa de Trabajo' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full bg-white shadow-md mb-8 border-b border-[var(--border)] sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-[var(--primary)] tracking-tight">FIEE UNCP</span>
        </div>
        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[var(--primary)] hover:text-[var(--secondary)] font-medium transition-colors duration-200 px-2 py-1 rounded hover:bg-[var(--muted)]"
            >
              {item.label}
            </Link>
          ))}
        </div>
        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center px-2 py-1 border rounded text-[var(--primary)] border-[var(--primary)]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[var(--border)] shadow px-4 pb-4 flex flex-col gap-2 animate-fade-in">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[var(--primary)] hover:text-[var(--secondary)] font-medium transition-colors duration-200 px-2 py-2 rounded hover:bg-[var(--muted)]"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
