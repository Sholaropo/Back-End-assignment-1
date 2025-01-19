import { findLargestHolding, calculateAssetAllocation, Asset } from '../src/portfolio/portfolio';

describe('findLargestHolding', () => {
  it('should find the asset with the largest value', () => {
    const assets: Asset[] = [
      { name: 'House', value: 300000 },
      { name: 'Stocks', value: 50000 },
      { name: 'Bonds', value: 20000 },
    ];

    const largestHolding = findLargestHolding(assets);
    expect(largestHolding).toEqual({ name: 'House', value: 300000 });
  });

  it('should return null for an empty portfolio', () => {
    const assets: Asset[] = [];
    const largestHolding = findLargestHolding(assets);
    expect(largestHolding).toBeNull();
  });

  it('should return the first asset if all assets have the same value', () => {
    const assets: Asset[] = [
      { name: 'Stocks', value: 10000 },
      { name: 'Bonds', value: 10000 },
      { name: 'Real Estate', value: 10000 },
    ];

    const largestHolding = findLargestHolding(assets);
    expect(largestHolding).toEqual({ name: 'Stocks', value: 10000 });
  });
});

describe('calculateAssetAllocation', () => {
  it('should calculate the correct percentage allocation for each asset', () => {
    const assets: Asset[] = [
      { name: 'Stocks', value: 5000 },
      { name: 'Bonds', value: 5000 },
      { name: 'Real Estate', value: 10000 },
    ];

    const allocation = calculateAssetAllocation(assets);
    expect(allocation).toEqual([
      { name: 'Stocks', percentage: 25 },
      { name: 'Bonds', percentage: 25 },
      { name: 'Real Estate', percentage: 50 },
    ]);
  });

  it('should handle an empty portfolio', () => {
    const assets: Asset[] = [];
    const allocation = calculateAssetAllocation(assets);
    expect(allocation).toEqual([]);
  });

  it('should calculate percentages for assets with equal values', () => {
    const assets: Asset[] = [
      { name: 'Stocks', value: 5000 },
      { name: 'Bonds', value: 5000 },
    ];

    const allocation = calculateAssetAllocation(assets);
    expect(allocation).toEqual([
      { name: 'Stocks', percentage: 50 },
      { name: 'Bonds', percentage: 50 },
    ]);
  });
});
