import { createSupabaseServerClientWithoutCookies } from '@/shared/lib/supabase/server-client-no-cookies';

export const booksQuery = () => {
  const client = createSupabaseServerClientWithoutCookies();
  return client.from('books').select('*', { count: 'exact' });
};

export type TBookQuery = ReturnType<typeof booksQuery>;
