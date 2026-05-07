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
    <nav className="w-full bg-white shadow mb-8">
      <div className="container mx-auto flex items-center py-4 gap-6">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="text-gray-700 hover:text-blue-700 font-medium">
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
