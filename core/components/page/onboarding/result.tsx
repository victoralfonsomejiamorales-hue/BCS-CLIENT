"use client";

import { useOnboardingStore } from "@/core/stores/onboarding-store";
import OnboardingError from "./error";

const OnboardingResult = () => {
  const { result, isLoading, error, setResult } = useOnboardingStore();

  const handleClose = () => {
    setResult(null);
  };

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <OnboardingError />;
  }

  if (!result) {
    return null;
  }

  return (
    <div className="my-4 w-full border border-green-200 rounded-lg shadow-sm bg-green-50 p-4">
      <div className="flex justify-between items-start">
        <div className="flex items-start gap-3">
          <div className="shrink-0">
            <svg
              className="w-6 h-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold text-green-700">
              Solicitud enviada
            </h2>
            <p className="text-green-600">
              Tu solicitud se ha creado con el id:{" "}
              <strong className="font-bold text-foreground">{result}</strong>
            </p>
          </div>
        </div>
        <button
          onClick={handleClose}
          className="shrink-0 text-green-600 hover:text-green-800 transition-colors"
          aria-label="Cerrar"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default OnboardingResult;
