import Link from "next/link";

const links = [
  { href: "/productos", label: "Productos" },
  { href: "/simular", label: "Simular" },
];

export function MainHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md supports-backdrop-filter:bg-background/80">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold text-primary">
                Simulador de Ahorro
              </h1>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
