'use server';
import type { TBook } from '@/entities/book/model/types';
import { cacheLife } from 'next/cache';
import { createSupabaseServerClientWithoutCookies } from '@/shared/lib/supabase/server-client';

export const getBooks: () => Promise<TBook[]> = async () => {
  'use cache';
  cacheLife('hours');
  const client = createSupabaseServerClientWithoutCookies();
  const { data, error } = await client.from('books').select();
  if (error) throw error;
  return data;
};
