import OnboardingForm from "@/core/components/page/onboarding/form";
import OnboardingResult from "@/core/components/page/onboarding/result";

const Onboarding = () => {
  return (
    <section className="w-full bg-white p-4">
      <div className="mb-4">
        <h1 className="mb-2 text-3xl font-bold">Onboarding</h1>
        <p className="text-muted-foreground">
          Ingresa los datos requeridos por el sistema para poder realizar el
          onboarding.
        </p>
      </div>

      <OnboardingForm />
      <OnboardingResult />
    </section>
  );
};

export default Onboarding;
