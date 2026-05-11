import { createSupabaseServerClientWithoutCookies } from '@/shared/lib/supabase/server-client-no-cookies';
import type { TBook } from '../model/types';

export const getBook = async (id: string): Promise<TBook | null> => {
  const client = createSupabaseServerClientWithoutCookies();
  const { data, error } = await client.from('books').select('*').eq('id', id);
  if (error) {
    return null;
  }
  return data[0];
};
