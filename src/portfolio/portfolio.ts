export interface Asset {
  name: string;
  value: number;
}

export function findLargestHolding(assets: Asset[]): Asset | null {
  if (assets.length === 0) return null;
  return assets.reduce((largest, current) => (current.value > largest.value ? current : largest));
}

export function calculateAssetAllocation(assets: Asset[]): { name: string, percentage: number }[] {
  const totalValue = assets.reduce((sum, asset) => sum + asset.value, 0);
  return assets.map(asset => ({
    name: asset.name,
    percentage: (asset.value / totalValue) * 100,
  }));
}
