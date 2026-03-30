'use server';
import type { TBook } from '@/entities/book/model/types';
import { cacheLife } from 'next/cache';
import { createSupabaseServerClientWithoutCookies } from '@/shared/lib/supabase/server-client';
import type { TSortPreset } from '@/features/book-sort/model/sort-presets';
import { SORT_PRESETS } from '@/features/book-sort/model/sort-presets';

type TBookQuery = ReturnType<typeof booksQuery>;

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

const booksQuery = () => {
  const client = createSupabaseServerClientWithoutCookies();
  return client.from('books').select();
};

const getSortedBooks = (query: TBookQuery, preset?: string | null) => {
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

const getSearchedBooks = (
  query: TBookQuery,
  searchedString?: string | null,
) => {
  if (!searchedString) return query;
  const searchPattern = `%${searchedString}%`;
  return query.or(`title.ilike.${searchPattern},author.ilike.${searchPattern}`);
};

type TGetBooks = (
  searchedString?: string | null,
  sortPreset?: string | null,
) => Promise<TBook[] | null>;

export const getBooks: TGetBooks = async (searchedString, sortPreset) => {
  'use cache';
  cacheLife('hours');
  const query = booksQuery();
  const applySearch = getSearchedBooks(query, searchedString);
  const applySort = getSortedBooks(applySearch, sortPreset);
  const { data, error } = await applySort;
  if (error) throw error;
  return data;
};
