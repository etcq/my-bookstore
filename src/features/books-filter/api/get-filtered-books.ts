import {
  FILTER_PARAM_NAMES,
  type TFilterOptions,
} from '@/features/books-filter/model/filter-params-names';
import { bookCategories, type TBookQuery } from '@/entities/book';
import type { TBookCategory } from '@/entities/book/model/types';
import { isNumericParamValue } from '@/features/books-filter/model/is-numeric-param-value';

const isBookCategory = (value: string | null): value is TBookCategory => {
  return bookCategories.some((category) => category === value);
};

const filterMap = {
  [FILTER_PARAM_NAMES.categories]: (query: TBookQuery, value: string) =>
    isBookCategory(value) ? query.eq('category', value) : query,
  [FILTER_PARAM_NAMES.authors]: (query: TBookQuery, value: string) =>
    query.eq('author', value),
  [FILTER_PARAM_NAMES.priceFrom]: (query: TBookQuery, value: string) =>
    query.gte('price', isNumericParamValue(value)),
  [FILTER_PARAM_NAMES.priceTo]: (query: TBookQuery, value: string) =>
    query.lte('price', isNumericParamValue(value)),
  [FILTER_PARAM_NAMES.ratingFrom]: (query: TBookQuery, value: string) =>
    query.gte('rating', isNumericParamValue(value)),
  [FILTER_PARAM_NAMES.ratingTo]: (query: TBookQuery, value: string) =>
    query.lte('rating', isNumericParamValue(value)),
  [FILTER_PARAM_NAMES.stockOnly]: (query: TBookQuery) => query, // in_stock column not in schema yet
} satisfies Record<
  TFilterOptions,
  (query: TBookQuery, value: string) => TBookQuery
>;

export const getFilteredBooks = (
  query: TBookQuery,
  params: Record<string, string | null | undefined>,
): TBookQuery => {
  return Object.entries(params).reduce((q, [key, value]) => {
    if (!value || !(key in filterMap)) return q;
    return filterMap[key as TFilterOptions](q, value);
  }, query);
};
