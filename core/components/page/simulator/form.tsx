"use client";

import { useSimulatorStore } from "@/core/stores/simulator-store";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { simulatorService } from "@/core/domain/services/simulator";
import { Button } from "../../ui/button";

const formSchema = z.object({
  initialAmount: z
    .number({ message: "El monto inicial debe ser un número" })
    .min(0, "El monto inicial debe ser mayor o igual a 0"),
  monthlyContribution: z
    .number({ message: "El aporte mensual debe ser un número" })
    .min(0, "El aporte mensual debe ser mayor o igual a 0"),
  months: z
    .number({ message: "El plazo debe ser un número" })
    .min(1, "El plazo debe ser al menos 1 mes")
    .max(600, "El plazo no puede exceder 600 meses"),
});

type SimulatorFormSchema = z.infer<typeof formSchema>;

const SimulatorForm = () => {
  const { setResult, setError, setIsLoading, isLoading } = useSimulatorStore();

  const form = useForm<SimulatorFormSchema>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      initialAmount: 0,
      monthlyContribution: 0,
      months: 12,
    },
  });

  const onSubmit = async (data: SimulatorFormSchema) => {
    try {
      console.log("Form data:", data);
      setIsLoading(true);
      setError(null);

      console.log("Calling simulator...");
      const result = await simulatorService.simulate(data);
      console.log("Result:", result);

      if (result) {
        setResult(result);
        form.reset();
        return;
      }

      throw new Error("Failed to simulate");
    } catch (error) {
      console.error("Error:", error);
      setError(error instanceof Error ? error.message : "Failed to simulate");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full mx-auto border border-gray-200 rounded-3xl shadow-sm bg-white p-4">
      <div className="p-0">
        <form id="simulator-form" onSubmit={form.handleSubmit(onSubmit)}>
          <fieldset
            disabled={isLoading}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <div className="space-y-2">
              <label htmlFor="initialAmount" className="text-sm font-medium">
                Monto inicial
              </label>
              <input
                {...form.register("initialAmount", { valueAsNumber: true })}
                id="initialAmount"
                type="number"
                placeholder="Monto inicial"
                autoComplete="off"
                className={`w-full px-3 py-2 border rounded-3xl text-sm ${
                  form.formState.errors.initialAmount
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                } focus:outline-none focus:ring-2`}
              />
              {form.formState.errors.initialAmount && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.initialAmount.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="monthlyContribution"
                className="text-sm font-medium"
              >
                Aporte mensual
              </label>
              <input
                {...form.register("monthlyContribution", {
                  valueAsNumber: true,
                })}
                id="monthlyContribution"
                type="number"
                placeholder="Aporte mensual"
                autoComplete="off"
                className={`w-full px-3 py-2 border rounded-3xl text-sm ${
                  form.formState.errors.monthlyContribution
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                } focus:outline-none focus:ring-2`}
              />
              {form.formState.errors.monthlyContribution && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.monthlyContribution.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="months" className="text-sm font-medium">
                Meses
              </label>
              <input
                {...form.register("months", { valueAsNumber: true })}
                id="months"
                type="number"
                placeholder="Plazo en meses"
                autoComplete="off"
                className={`w-full px-3 py-2 border rounded-3xl text-sm ${
                  form.formState.errors.months
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                } focus:outline-none focus:ring-2`}
              />
              {form.formState.errors.months && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.months.message}
                </p>
              )}
            </div>
          </fieldset>
          <div className="p-0">
            <div className="flex">
              <Button
                type="submit"
                form="simulator-form"
                className="my-2 px-4 py-2 bg-blue-500 text-white rounded-3xl hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                disabled={!form.formState.isValid || isLoading}
              >
                {isLoading ? "Simulando..." : "Simular"}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SimulatorForm;
