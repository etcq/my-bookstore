import { type TBookQuery } from '@/entities/book';

export const getBooksPage = (
  query: TBookQuery,
  page: number,
  booksPerPage: number,
) => {
  return query.range((page - 1) * booksPerPage, page * booksPerPage - 1);
};
