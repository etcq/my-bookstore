import type { Tables } from '@/shared/lib/supabase/types';

export type TBook = Tables<'books'>;
export type TBookCard = Omit<
  TBook,
  'description' | 'created_at' | 'category' | 'pages' | 'in_stock'
>;

export type TBookCategory = TBook['category'];
