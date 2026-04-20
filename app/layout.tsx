import type { Metadata } from "next";
import "./globals.css";
import { MainHeader } from "../core/components/common/mainHeader";
import { MainFooter } from "../core/components/common/mainFooter";

export const metadata: Metadata = {
  title: "Simulador de Ahorro",
  description: "Simulador de ahorro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased flex flex-col min-h-screen"
        suppressHydrationWarning
      >
        <MainHeader />
        <main className="flex-1 container mx-auto px-4 py-8 max-w-7xl">
          {children}
        </main>
        <MainFooter />
      </body>
    </html>
  );
}
