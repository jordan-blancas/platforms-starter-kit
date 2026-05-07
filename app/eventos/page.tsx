export default function EventosPage() {
  return (
    <section className="py-8 px-2 sm:px-4 md:px-8 max-w-3xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-4">Eventos y Actividades</h1>
      <ul className="space-y-4 text-base md:text-lg">
        <li className="bg-[var(--muted)] p-4 rounded shadow">
          <span className="font-semibold text-[var(--secondary)]">15 de mayo 2026:</span> Seminario Internacional de Energías Renovables
        </li>
        <li className="bg-[var(--muted)] p-4 rounded shadow">
          <span className="font-semibold text-[var(--secondary)]">28 de junio 2026:</span> Feria de Proyectos de Innovación Tecnológica
        </li>
        <li className="bg-[var(--muted)] p-4 rounded shadow">
          <span className="font-semibold text-[var(--secondary)]">10 de agosto 2026:</span> Taller de Automatización Industrial
        </li>
      </ul>
    </section>
  );
}
