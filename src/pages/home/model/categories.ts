import type { TBookCategory } from '@/entities/book/model/types';
import { bookCategories } from '@/entities/book';

interface IBookCategoriesForPreview {
  name: string;
  emoji: string;
  color: string;
  param?: TBookCategory;
}

export const bookCategoriesForPreview: IBookCategoriesForPreview[] = [
  {
    name: 'Business',
    emoji: '💰',
    color: 'bg-amber-100 dark:bg-amber-900',
    param: bookCategories.BUSINESS,
  },
  {
    name: 'Science fiction',
    emoji: '🔬',
    color: 'bg-blue-100 dark:bg-blue-900',
    param: bookCategories.SCIENCE_FICTION,
  },
  {
    name: 'History',
    emoji: '🏛️',
    color: 'bg-stone-100 dark:bg-stone-700',
    param: bookCategories.HISTORY,
  },
  {
    name: 'Adventure',
    emoji: '🧙',
    color: 'bg-purple-100 dark:bg-purple-900',
    param: bookCategories.ADVENTURE,
  },
  {
    name: 'Biography',
    emoji: '👤',
    color: 'bg-green-100 dark:bg-green-900',
    param: bookCategories.BIOGRAPHY,
  },
  {
    name: 'Thriller',
    emoji: '🔍',
    color: 'bg-red-100 dark:bg-red-900',
    param: bookCategories.THRILLER,
  },
];
