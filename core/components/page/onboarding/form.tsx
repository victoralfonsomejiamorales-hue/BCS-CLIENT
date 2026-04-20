"use client";

import { useOnboardingStore } from "@/core/stores/onboarding-store";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { onboardingService } from "@/core/domain/services/onboarding";
import { useCallback, useEffect } from "react";
import { Button } from "../../ui/button";

const formSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  document: z.string().min(1, "El documento es requerido"),
  email: z.email("El correo debe ser válido"),
  recaptcha: z.string().min(1, "El recaptcha es requerido"),
});

type OnboardingFormSchema = z.infer<typeof formSchema>;

const OnboardingForm = () => {
  const { isLoading, setResult, setError, setIsLoading } = useOnboardingStore();

  const form = useForm<OnboardingFormSchema>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      document: "",
      email: "",
      recaptcha: "",
    },
  });

  const generateToken = useCallback(() => {
    const result = onboardingService.generateRecaptcha();
    if (result.success) {
      form.setValue("recaptcha", result.token);
      form.clearErrors("recaptcha");
      form.trigger("recaptcha");
    } else {
      form.setError("recaptcha", {
        type: "manual",
        message: "Error al validar el recaptcha",
      });
    }
  }, [form]);

  useEffect(() => {
    if (form.getValues("recaptcha") === "") {
      generateToken();
    }
  }, [generateToken]);

  const onSubmit = async (data: OnboardingFormSchema) => {
    try {
      setIsLoading(true);
      setError(null);

      const result = await onboardingService.createOnboarding({
        name: data.name,
        document: data.document,
        email: data.email,
      });

      setResult(result);
      form.reset();
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Failed to create onboarding",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full mx-auto border border-gray-200 rounded-lg shadow-sm bg-white p-4">
      <div className="p-0">
        <form id="onboarding-form" onSubmit={form.handleSubmit(onSubmit)}>
          <fieldset
            disabled={isLoading}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Nombre
              </label>
              <input
                {...form.register("name")}
                id="name"
                type="text"
                placeholder="Ingrese su nombre"
                autoComplete="name"
                className={`w-full px-3 py-2 border rounded-md text-sm ${
                  form.formState.errors.name
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                } focus:outline-none focus:ring-2`}
              />
              {form.formState.errors.name && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="document" className="text-sm font-medium">
                Documento
              </label>
              <input
                {...form.register("document")}
                id="document"
                type="text"
                placeholder="Ingrese su documento"
                autoComplete="off"
                className={`w-full px-3 py-2 border rounded-md text-sm ${
                  form.formState.errors.document
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                } focus:outline-none focus:ring-2`}
              />
              {form.formState.errors.document && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.document.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Correo
              </label>
              <input
                {...form.register("email")}
                id="email"
                type="email"
                placeholder="Ingrese su correo"
                autoComplete="email"
                className={`w-full px-3 py-2 border rounded-md text-sm ${
                  form.formState.errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                } focus:outline-none focus:ring-2`}
              />
              {form.formState.errors.email && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>
          </fieldset>
          {form.formState.errors.recaptcha && (
            <div className="mt-4">
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-red-500">
                    {form.formState.errors.recaptcha.message}
                  </p>
                  <button
                    type="button"
                    onClick={generateToken}
                    className="px-2 py-1 text-xs bg-black text-white rounded hover:bg-gray-700"
                  >
                    Reintentar
                  </button>
                </div>
              </div>
            </div>
          )}
          <div className="p-0">
            <div className="flex">
              <Button
                type="submit"
                form="onboarding-form"
                className="my-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                {form.formState.isSubmitting ? "Enviando..." : "Enviar"}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OnboardingForm;
