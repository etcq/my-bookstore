import { createSupabaseServerClientWithoutCookies } from '@/shared/lib/supabase/server-client';

export const booksQuery = () => {
  const client = createSupabaseServerClientWithoutCookies();
  return client.from('books').select();
};

export type TBookQuery = ReturnType<typeof booksQuery>;
