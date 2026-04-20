export interface SimulatorDto {
  initialAmount: number;
  monthlyContribution: number;
  months: number;
}

export interface SimulatorResponse {
  totalContributed: number;
  finalBalance: number;
  interestEarned: number;
  months: number;
  annualInterestRate: number;
  monthlyEffectiveRate: number;
}
