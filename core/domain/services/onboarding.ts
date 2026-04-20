import { cryptoService } from "../../lib/crypto";
import { CreateOnboardingDto } from "../entities/onboarding";

class OnboardingService {
  async createOnboarding(onboardingData: CreateOnboardingDto) {
    const encryptedData = await cryptoService.encryptData(onboardingData);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/onboarding`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: encryptedData }),
      },
    );

    if (response.ok) {
      const res = await response.json();
      return res.data;
    }

    if (response.status === 409) {
      throw new Error(
        "An onboarding request is already pending for this email",
      );
    }

    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Failed to create onboarding");
  }

  generateRecaptcha(): { success: boolean; score: number; token: string } {
    try {
      const score = Math.random();

      if (score < 0.1) {
        return {
          success: false,
          score: score,
          token: "invalid",
        };
      }

      return {
        success: true,
        score: score,
        token: crypto.randomUUID(),
      };
    } catch {
      throw new Error("Failed to generate recaptcha");
    }
  }
}

export const onboardingService = new OnboardingService();
