export const SORT_PRESETS = {
  POPULAR: 'popular',
  PRICE_ASC: 'price-asc',
  PRICE_DESC: 'price-desc',
  HIGHEST_RATED: 'rating',
  NAME_ASC: 'name-asc',
  NAME_DESC: 'name-desc',
} as const;

export type TSortPreset = (typeof SORT_PRESETS)[keyof typeof SORT_PRESETS];

export const sortPresetsLabels = {
  [SORT_PRESETS.POPULAR]: 'Popular',
  [SORT_PRESETS.PRICE_ASC]: 'Price: Low to High',
  [SORT_PRESETS.PRICE_DESC]: 'Price: High to Low',
  [SORT_PRESETS.HIGHEST_RATED]: 'Highest Rated',
  [SORT_PRESETS.NAME_ASC]: 'Name: A-Z',
  [SORT_PRESETS.NAME_DESC]: 'Name: Z-A',
};
