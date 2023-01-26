export const Filter = {
  PRICE: 'price',
  BRAND: 'brand',
  COLOR: 'color',
} as const;

export type FilterBy = typeof Filter[keyof typeof Filter]; //"price" | "brand" | "color"
