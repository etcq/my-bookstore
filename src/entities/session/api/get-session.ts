'use server';

import { createSupabaseServerClient } from '@/shared/lib/supabase/server-client';

export const getSessionUser = async () => {
  const client = await createSupabaseServerClient();
  const { data } = await client.auth.getUser();
  return data.user ?? null;
};
