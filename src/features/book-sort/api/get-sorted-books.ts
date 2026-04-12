import {
  SORT_PRESETS,
  type TSortPreset,
} from '@/features/book-sort/model/sort-presets';
import { type TBookQuery } from '@/entities/book';

const isSortPreset = (
  preset: string | null | undefined,
): preset is TSortPreset => {
  return (
    !!preset && Object.values(SORT_PRESETS).some((value) => value === preset)
  );
};

const resolveSortPreset = (preset: string | null | undefined): TSortPreset => {
  return isSortPreset(preset) ? preset : SORT_PRESETS.POPULAR;
};

export const getSortedBooks = (query: TBookQuery, preset?: string | null) => {
  const resolvedPreset = resolveSortPreset(preset);
  const sortMap = {
    [SORT_PRESETS.POPULAR]: (query) =>
      query
        .order('rating', { ascending: false })
        .order('created_at', { ascending: false }),
    [SORT_PRESETS.PRICE_ASC]: (query) =>
      query.order('price', { ascending: true }),
    [SORT_PRESETS.PRICE_DESC]: (query) =>
      query.order('price', { ascending: false }),
    [SORT_PRESETS.HIGHEST_RATED]: (query) =>
      query.order('rating', { ascending: false }),
    [SORT_PRESETS.NAME_ASC]: (query) =>
      query.order('title', { ascending: true }),
    [SORT_PRESETS.NAME_DESC]: (query) =>
      query.order('title', { ascending: false }),
  } satisfies Record<TSortPreset, (query: TBookQuery) => TBookQuery>;

  return sortMap[resolvedPreset](query);
};
