import type { Tables } from '@/shared/lib/supabase/types';

export type TBook = Tables<'books'>;
export type TBookCard = Omit<
  TBook,
  'description' | 'created_at' | 'category' | 'pages'
>;

export type TBookCategory = TBook['category'];
