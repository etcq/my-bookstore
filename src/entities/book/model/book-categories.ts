import type { TBookCategory } from '@/entities/book/model/types';

export const bookCategories = {
  ADVENTURE: 'Adventure',
  HISTORY: 'History',
  SCIENCE_FICTION: 'ScienceFiction',
  PRODUCTIVITY: 'Productivity',
  BIOGRAPHY: 'Biography',
  BUSINESS: 'Business',
  DYSTOPIA: 'Dystopia',
  FANTASY: 'Fantasy',
  FINANCE: 'Finance',
  HORROR: 'Horror',
  PHILOSOPHY: 'Philosophy',
  PROGRAMMING: 'Programming',
  PSYCHOLOGY: 'Psychology',
  SELF_HELP: 'SelfHelp',
  THRILLER: 'Thriller',
} as const satisfies Record<string, TBookCategory>;
