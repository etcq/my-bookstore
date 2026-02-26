'use server';

import { createSupabaseServerClient } from '@/shared/lib/supabase/server-client';

export const signOut = async () => {
  const client = await createSupabaseServerClient();
  const { error } = await client.auth.signOut();
  if (error) {
    throw error;
  }
};
