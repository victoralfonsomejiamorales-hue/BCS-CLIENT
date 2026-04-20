import { SimulatorDto, SimulatorResponse } from "../entities/simulator";

class SimulatorService {
  async simulate(dto: SimulatorDto): Promise<SimulatorResponse | null> {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/simulator`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dto),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to simulate");
      }

      if (response.ok) {
        const res = await response.json();
        return res.data;
      }

      throw new Error("Failed to simulate");
    } catch {
      return null;
    }
  }
}

export const simulatorService = new SimulatorService();
