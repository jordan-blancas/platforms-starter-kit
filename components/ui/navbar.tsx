export default function Navbar() {
  // Temporal: se oculta la navegación mientras la landing de laboratorios sea la página principal.
  return (
    <header className="flex h-20 items-center justify-center border-b border-[var(--border)] bg-white px-4 md:hidden">
      <img src="https://uncp.edu.pe/wp-content/uploads/2025/09/Electrica.png" alt="FIEE UNCP" className="h-14 w-auto object-contain" />
    </header>
  );
}
