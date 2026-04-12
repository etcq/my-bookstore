import type { TBookCategory } from '@/entities/book/model/types';

export const bookCategories = [
  'Adventure',
  'History',
  'ScienceFiction',
  'Productivity',
  'Biography',
  'Business',
  'Dystopia',
  'Fantasy',
  'Finance',
  'Horror',
  'Philosophy',
  'Programming',
  'Psychology',
  'SelfHelp',
  'Thriller',
] as const satisfies TBookCategory[];
