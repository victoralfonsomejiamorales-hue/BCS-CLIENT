export function formatCurrency(value: number): string {
  return `$${value.toLocaleString("es-CO")}`;
}

export function formatPercentage(value: number): string {
  return `${value.toFixed(2)}%`;
}
