"use client";

import Link from "next/link";
import { Button } from "../core/components/ui/button";

export default function Home() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-5xl font-semibold">
            Bienvenido al{" "}
            <span className="font-bold">Simulador de Ahorro Diario</span>
          </h2>
          <p className="text-gray-600 text-2xl mt-4">
            Explora los productos de ahorro y simula cuánto podrías ganar con tu
            depósito
          </p>
          <div className="flex gap-2 justify-center mt-4">
            <Button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded-3xl hover:bg-blue-600"
            >
              <Link href="/onboarding">Comenzar ahora</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
