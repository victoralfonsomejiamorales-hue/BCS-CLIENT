import SimulatorForm from "@/core/components/page/simulator/form";
import SimulatorResult from "@/core/components/page/simulator/result";

export default function Simulator() {
  return (
    <section className="w-full">
      <div className="mb-4">
        <h1 className="mb-2 text-3xl font-bold">Simular la rentabilidad</h1>
        <p className="text-muted-foreground">
          Ingresa los datos requeridos por el sistema para poder realizar la
          simulación.
        </p>
      </div>

      <SimulatorForm />
      <SimulatorResult />
    </section>
  );
}
