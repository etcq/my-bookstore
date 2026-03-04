'use server';
import { createSupabaseServerClient } from '@/shared/lib/supabase/server-client';

export const getUserInfo = async () => {
  const client = await createSupabaseServerClient();
  const {
    data: { user },
  } = await client.auth.getUser();
  if (!user) {
    throw new Error('User not found');
  }
  const { data, error } = await client
    .from('profiles')
    .select()
    .eq('id', user.id);
  if (error) throw error;
  return data[0];
};
