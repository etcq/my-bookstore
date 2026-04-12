'use server';
import { booksQuery, type TBook } from '@/entities/book';
import { cacheLife } from 'next/cache';
import { getSortedBooks } from '@/features/book-sort';
import { getFilteredBooks } from '@/features/books-filter';
import { getSearchedBooks } from '@/features/books-search';
import { getBooksPage } from '@/features/books-pagination/api/get-books-page';

type TGetBooksCatalog = (
  searchedString?: string | null,
  sortPreset?: string | null,
  filterParams?: Record<string, string | null | undefined>,
  page?: number,
  booksPerPage?: number,
) => Promise<catalogInfo>;

interface catalogInfo {
  data: TBook[] | null;
  count: number | null;
}

export const getBooksCatalog: TGetBooksCatalog = async (
  searchedString,
  sortPreset,
  filterParams = {},
  page = 1,
  booksPerPage = 9,
) => {
  'use cache';
  cacheLife('hours');
  const query = booksQuery();
  const applySearch = getSearchedBooks(query, searchedString);
  const applyFilters = getFilteredBooks(applySearch, filterParams);
  const applySort = getSortedBooks(applyFilters, sortPreset);
  const applyPage = getBooksPage(applySort, page, booksPerPage);
  const { data, count, error } = await applyPage;
  if (error) throw error;
  return { data, count };
};
