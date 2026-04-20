import { Link } from "../ui/link";

export function MainFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-gray-200 bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {year} Simulador de Ahorro. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
