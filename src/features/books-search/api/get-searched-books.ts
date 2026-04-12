import { type TBookQuery } from '@/entities/book';

export const getSearchedBooks = (
  query: TBookQuery,
  searchedString?: string | null,
) => {
  if (!searchedString) return query;
  const searchPattern = `%${searchedString.trim()}%`;
  return query.or(`title.ilike.${searchPattern},author.ilike.${searchPattern}`);
};
