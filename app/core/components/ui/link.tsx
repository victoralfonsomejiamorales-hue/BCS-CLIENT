interface LinkProps {
  children: React.ReactNode;
  href: string;
}

export function Link({ children, href }: Readonly<LinkProps>) {
  return (
    <a href={href} className="hover:text-foreground transition-colors">
      {children}
    </a>
  );
}
