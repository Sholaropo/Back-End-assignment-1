const { calculatePortfolioPerformance } = require('../src/portfolio/portfolioPerformance');

describe('calculatePortfolioPerformance', () => {
  it('should calculate significant gain correctly', () => {
    const result = calculatePortfolioPerformance(10000, 15000);
    expect(result).toEqual({
      initialInvestment: 10000,
      currentValue: 15000,
      profitOrLoss: 5000,
      percentageChange: 50,
      performanceSummary: 'Gained significantly',
    });
  });

  it('should calculate moderate gain correctly', () => {
    const result = calculatePortfolioPerformance(10000, 12000);
    expect(result).toEqual({
      initialInvestment: 10000,
      currentValue: 12000,
      profitOrLoss: 2000,
      percentageChange: 20,
      performanceSummary: 'Gained moderately',
    });
  });

  it('should calculate slight gain correctly', () => {
    const result = calculatePortfolioPerformance(10000, 10500);
    expect(result).toEqual({
      initialInvestment: 10000,
      currentValue: 10500,
      profitOrLoss: 500,
      percentageChange: 5,
      performanceSummary: 'Gained slightly',
    });
  });

  it('should handle no change correctly', () => {
    const result = calculatePortfolioPerformance(10000, 10000);
    expect(result).toEqual({
      initialInvestment: 10000,
      currentValue: 10000,
      profitOrLoss: 0,
      percentageChange: 0,
      performanceSummary: 'No change',
    });
  });

  it('should calculate slight loss correctly', () => {
    const result = calculatePortfolioPerformance(10000, 9500);
    expect(result).toEqual({
      initialInvestment: 10000,
      currentValue: 9500,
      profitOrLoss: -500,
      percentageChange: -5,
      performanceSummary: 'Lost slightly',
    });
  });

  it('should calculate moderate loss correctly', () => {
    const result = calculatePortfolioPerformance(10000, 8000);
    expect(result).toEqual({
      initialInvestment: 10000,
      currentValue: 8000,
      profitOrLoss: -2000,
      percentageChange: -20,
      performanceSummary: 'Lost moderately',
    });
  });

  it('should calculate significant loss correctly', () => {
    const result = calculatePortfolioPerformance(10000, 5000);
    expect(result).toEqual({
      initialInvestment: 10000,
      currentValue: 5000,
      profitOrLoss: -5000,
      percentageChange: -50,
      performanceSummary: 'Lost significantly',
    });
  });

  it('should handle edge cases (zero investment)', () => {
    const result = calculatePortfolioPerformance(0, 1000);
    expect(result).toEqual({
      initialInvestment: 0,
      currentValue: 1000,
      profitOrLoss: 1000,
      percentageChange: Infinity,
      performanceSummary: 'Gained significantly',
    });
  });

  it('should handle edge cases (zero current value)', () => {
    const result = calculatePortfolioPerformance(1000, 0);
    expect(result).toEqual({
      initialInvestment: 1000,
      currentValue: 0,
      profitOrLoss: -1000,
      percentageChange: -100,
      performanceSummary: 'Lost significantly',
    });
  });
});
