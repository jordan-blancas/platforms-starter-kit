export default function ContactoPage() {
  return (
    <section className="py-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-[var(--primary)] mb-4">Contacto</h1>
      <p className="mb-4">¿Tienes alguna consulta? Contáctanos a través del siguiente formulario o usando los datos institucionales.</p>
      <form className="bg-[var(--muted)] p-6 rounded shadow mb-6 grid gap-4">
        <input type="text" placeholder="Nombre completo" className="border border-[var(--border)] rounded px-3 py-2" required />
        <input type="email" placeholder="Correo electrónico" className="border border-[var(--border)] rounded px-3 py-2" required />
        <textarea placeholder="Mensaje" className="border border-[var(--border)] rounded px-3 py-2" rows={4} required />
        <button type="submit" className="bg-[var(--primary)] text-[var(--primary-foreground)] px-4 py-2 rounded font-semibold hover:bg-[var(--secondary)] transition-colors">Enviar</button>
      </form>
      <div className="bg-white p-4 rounded shadow">
        <p><span className="font-semibold">Dirección:</span> Av. Mariscal Castilla N° 3909, El Tambo, Huancayo, Perú</p>
        <p><span className="font-semibold">Teléfono:</span> (064) 481060 Anexo 120</p>
        <p><span className="font-semibold">Correo:</span> fiee@uncp.edu.pe</p>
      </div>
    </section>
  );
}
