import { Link } from "../ui/link";

export function MainFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {year} Simulador de Ahorro. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#terms">Términos</Link>
            <Link href="#privacy">Privacidad</Link>
            <Link href="#contact">Contacto</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
