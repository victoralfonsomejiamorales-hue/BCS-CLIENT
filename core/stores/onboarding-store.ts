// store/onboarding-store.ts
import { create } from "zustand";

interface OnboardingStore {
  result: string | null;
  error: string | null;
  isLoading: boolean;
  setResult: (result: string | null) => void;
  setError: (error: string | null) => void;
  setIsLoading: (isLoading: boolean) => void;
}

export const useOnboardingStore = create<OnboardingStore>((set) => ({
  result: null,
  error: null,
  isLoading: false,
  setResult: (result) => set({ result }),
  setError: (error) => set({ error }),
  setIsLoading: (isLoading) => set({ isLoading }),
}));
