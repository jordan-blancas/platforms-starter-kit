export default function InvestigacionPage() {
  return (
    <section className="py-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-[var(--primary)] mb-4">Investigación</h1>
      <p className="mb-4">La investigación es un pilar fundamental en la FIEE-UNCP. Nuestros docentes y estudiantes participan activamente en proyectos de impacto nacional e internacional.</p>
      <h2 className="text-2xl font-semibold text-[var(--secondary)] mb-2">Líneas de investigación</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Energías renovables y eficiencia energética</li>
        <li>Automatización y control industrial</li>
        <li>Electrónica de potencia</li>
        <li>Redes eléctricas inteligentes</li>
      </ul>
      <h2 className="text-2xl font-semibold text-[var(--secondary)] mb-2">Grupos destacados</h2>
      <ul className="list-disc pl-6">
        <li>Grupo de Investigación en Energía y Medio Ambiente</li>
        <li>Grupo de Automatización y Robótica</li>
      </ul>
    </section>
  );
}
