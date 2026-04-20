"use client";

import { useOnboardingStore } from "@/core/stores/onboarding-store";

const OnboardingError = () => {
  const { error, setError } = useOnboardingStore();

  const handleClose = () => {
    setError(null);
  };

  return (
    <div className="my-4 w-full border border-red-200 rounded-lg shadow-sm bg-red-50 p-4">
      <div className="flex justify-between items-start">
        <div className="flex items-start gap-3">
          <div className="shrink-0">
            <svg
              className="w-6 h-6 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <h2 className="mb-2 text-xl font-bold text-red-700">Error</h2>
            <p className="text-red-600">
              {error || "Ocurrió un error al crear la solicitud"}
            </p>
          </div>
        </div>
        <button
          onClick={handleClose}
          className="shrink-0 text-red-600 hover:text-red-800 transition-colors"
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

export default OnboardingError;
