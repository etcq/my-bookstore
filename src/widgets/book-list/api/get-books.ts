'use server';
import type { TBook } from '@/entities/book/model/types';
import { cacheLife } from 'next/cache';
import { createSupabaseServerClientWithoutCookies } from '@/shared/lib/supabase/server-client';

export const getBooks: (searchedString?: string) => Promise<TBook[]> = async (
  searchedString: string | undefined,
) => {
  'use cache';
  cacheLife('hours');
  const client = createSupabaseServerClientWithoutCookies();

  const q = (searchedString ?? '').trim();

  if (!q) {
    const { data, error } = await client.from('books').select();
    if (error) throw error;
    return data;
  }

  const pattern = `%${q}%`;

  const { data, error } = await client
    .from('books')
    .select()
    .or(`title.ilike.${pattern},author.ilike.${pattern}`);
  if (error) throw error;
  return data;
};
