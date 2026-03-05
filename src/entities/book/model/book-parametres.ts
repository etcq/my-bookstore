import type { TBookForm } from './book.schema';

interface IBookParameter {
  name: keyof TBookForm;
  label: string;
  type?: string;
  step?: number;
}

export const bookParameters: IBookParameter[] = [
  { name: 'name', label: 'Name' },
  { name: 'author', label: 'Author' },
  { name: 'description', label: 'Description' },
  { name: 'genre', label: 'Genre' },
  { name: 'pageCount', label: 'Page count', type: 'number' },
  { name: 'price', label: 'Price', type: 'number', step: 0.01 },
  { name: 'rating', label: 'Rating', type: 'number' },
];
