'use server';
import { createSupabaseServerClient } from '@/shared/lib/supabase/server-client';

export const getUsernames = async (username: string) => {
  const client = await createSupabaseServerClient();
  const { data, error } = await client.from('profiles').select('username');
  if (error) throw error;
  data.forEach((item) => {
    if (item.username === username) {
      throw new Error('Username already exists');
    }
  });
};
