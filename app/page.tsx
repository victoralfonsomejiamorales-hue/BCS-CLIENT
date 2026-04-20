"use client";

import Link from "next/link";
import { Button } from "../core/components/ui/button";

export default function Home() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-background to-muted/20">
      <div
        className="absolute inset-0 blur-[200px]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0, 0, 0, 0.15) 50%, rgba(0, 0, 0, 0.08) 50%, transparent 0%)",
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-5xl font-semibold">
            Bienvenido al <span className="font-bold">Simulador de Ahorro</span>
          </h2>
          <p className="text-gray-600 text-2xl mt-4">
            Explora los productos de ahorro y simula cuánto podrías ganar con tu
            depósito
          </p>
          <div className="flex gap-2 justify-center mt-4">
            <Button
              type="button"
              className="bg-black text-white px-4 py-2 rounded-3xl hover:bg-gray-800"
            >
              <Link href="/onboarding">Registrate</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
