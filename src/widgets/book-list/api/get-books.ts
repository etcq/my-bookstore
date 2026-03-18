'use server';
import { createSupabaseServerClient } from '@/shared/lib/supabase/server-client';
import type { Tables } from '@/shared/lib/supabase/types';

export const getBooks: () => Promise<Tables<'books'>[]> = async () => {
  const client = await createSupabaseServerClient();
  const { data, error } = await client.from('books').select();
  if (error) throw error;
  return data;
};
