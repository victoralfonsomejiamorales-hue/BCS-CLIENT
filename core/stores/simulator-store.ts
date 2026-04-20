// core/store/simulator-store.ts
import { SimulatorResponse } from "@/core/domain/entities/simulator";
import { create } from "zustand";

interface SimulatorStore {
  result: SimulatorResponse | null;
  error: string | null;
  isLoading: boolean;
  setResult: (result: SimulatorResponse | null) => void;
  setError: (error: string | null) => void;
  setIsLoading: (isLoading: boolean) => void;
}

export const useSimulatorStore = create<SimulatorStore>((set) => ({
  result: null,
  error: null,
  isLoading: false,
  setResult: (result) => set({ result }),
  setError: (error) => set({ error }),
  setIsLoading: (isLoading) => set({ isLoading }),
}));
