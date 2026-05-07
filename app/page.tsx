import Link from 'next/link';
import { SubdomainForm } from './subdomain-form';
import { rootDomain } from '@/lib/utils';

export default async function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4 relative">
      <div className="absolute top-4 right-4">
        <Link
          href="/admin"
          className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          Admin
        </Link>
      <section className="flex flex-col items-center justify-center py-10 md:py-16 gap-6 md:gap-8 px-2 sm:px-4 md:px-8 w-full">
        <img src="https://fieeuncp.edu.pe/wp-content/uploads/2022/09/logo-fiee-uncp.png" alt="Logo FIEE UNCP" className="w-28 h-28 md:w-40 md:h-40 object-contain mb-4" />
        <h1 className="text-2xl md:text-5xl font-extrabold text-[var(--primary)] text-center mb-2">Facultad de Ingeniería Eléctrica</h1>
        <h2 className="text-lg md:text-3xl font-semibold text-[var(--secondary)] text-center mb-4">Universidad Nacional del Centro del Perú</h2>
        <p className="text-base md:text-xl text-center max-w-2xl">Bienvenido al portal institucional de la FIEE-UNCP. Aquí encontrarás información relevante sobre nuestra facultad, programas académicos, investigación, eventos, acreditación, infraestructura, bolsa de trabajo y más.</p>
      </section>

        <div className="mt-8 bg-white shadow-md rounded-lg p-6">
          <SubdomainForm />
        </div>
      </div>
    </div>
  );
}
