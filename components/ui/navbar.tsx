import Link from 'next/link';

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
  return (
    <nav className="w-full bg-white shadow-md mb-8 border-b border-[var(--border)] sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-[var(--primary)] tracking-tight">FIEE UNCP</span>
        </div>
        <div className="flex items-center gap-6">
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
      </div>
    </nav>
  );
}
