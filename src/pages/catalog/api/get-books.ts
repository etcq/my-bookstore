'use server';
import { booksQuery, type TBook } from '@/entities/book';
import { cacheLife } from 'next/cache';
import { getSortedBooks } from '@/features/book-sort';
import { getFilteredBooks } from '@/features/books-filter';
import { getSearchedBooks } from '@/features/books-search';

type TGetBooksCatalog = (
  searchedString?: string | null,
  sortPreset?: string | null,
  filterParams?: Record<string, string | null | undefined>,
) => Promise<TBook[] | null>;

export const getBooksCatalog: TGetBooksCatalog = async (
  searchedString,
  sortPreset,
  filterParams = {},
) => {
  'use cache';
  cacheLife('hours');
  const query = booksQuery();
  const applySearch = getSearchedBooks(query, searchedString);
  const applyFilters = getFilteredBooks(applySearch, filterParams);
  const applySort = getSortedBooks(applyFilters, sortPreset);
  const { data, error } = await applySort;
  if (error) throw error;
  return data;
};
