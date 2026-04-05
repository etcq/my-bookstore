export const FILTER_PARAM_NAMES = {
  categories: 'categories',
  authors: 'authors',
  priceTo: 'price_to',
  priceFrom: 'price_from',
  ratingFrom: 'rating_from',
  ratingTo: 'rating_to',
  stockOnly: 'stock_only',
} as const;

export type TFilterOptions =
  (typeof FILTER_PARAM_NAMES)[keyof typeof FILTER_PARAM_NAMES];
