interface PortfolioPerformance {
  initialInvestment: number;
  currentValue: number;
  profitOrLoss: number;
  percentageChange: number;
  performanceSummary: string;
}

export function calculatePortfolioPerformance(
  initialInvestment: number,
  currentValue: number
): PortfolioPerformance {
  const profitOrLoss = currentValue - initialInvestment;
  const percentageChange = (profitOrLoss / initialInvestment) * 100;

  const performanceSummary = 
    percentageChange > 20
      ? "Gained significantly"
      : percentageChange >= 10
      ? "Gained moderately"
      : percentageChange > 0
      ? "Gained slightly"
      : percentageChange === 0
      ? "No change"
      : percentageChange >= -10
      ? "Lost slightly"
      : percentageChange >= -20
      ? "Lost moderately"
      : "Lost significantly";

  return {
    initialInvestment,
    currentValue,
    profitOrLoss,
    percentageChange,
    performanceSummary,
  };
}
