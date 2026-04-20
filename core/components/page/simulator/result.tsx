"use client";

import { useSimulatorStore } from "@/core/stores/simulator-store";
import SimulatorError from "./error";
import { formatCurrency, formatPercentage } from "@/core/lib/utils";

const SimulatorResult = () => {
  const { result, error, isLoading } = useSimulatorStore();

  if (isLoading) return <div>Cargando...</div>;

  if (error) return <SimulatorError />;

  if (!result) return null;

  return (
    <div className="w-full mx-auto border border-gray-200 rounded-3xl shadow-sm bg-white p-6 mt-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold">Resultados de la simulación</h2>
        <p className="text-gray-600">
          Resumen de tu inversión y rentabilidad proyectada
        </p>
      </div>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <span className="text-sm text-gray-500">Total aportado:</span>
            <p className="text-lg font-semibold">
              {formatCurrency(result.totalContributed)}
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-sm text-gray-500">Saldo final:</span>
            <p className="text-lg font-bold text-blue-500">
              {formatCurrency(result.finalBalance)}
            </p>
          </div>
        </div>

        <hr className="border-gray-200" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <span className="text-sm text-gray-500">Intereses ganados:</span>
            <p className="text-lg font-bold text-blue-500">
              {formatCurrency(result.interestEarned)}
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-sm text-gray-500">Plazo:</span>
            <p className="text-lg font-semibold">
              {result.months} {result.months === 1 ? "mes" : "meses"}
            </p>
          </div>
        </div>

        <hr className="border-gray-200" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <span className="text-sm text-gray-500">
              Tasa de interés anual:
            </span>
            <p className="text-lg font-semibold">
              {formatPercentage(result.annualInterestRate)} EA
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-sm text-gray-500">
              Tasa efectiva mensual:
            </span>
            <p className="text-lg font-semibold">
              {formatPercentage(result.monthlyEffectiveRate)} EM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimulatorResult;
