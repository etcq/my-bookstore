import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { getSupabaseEnvVariables } from '@/shared/lib/supabase/get-supabase-env';
import type { Database } from '@/shared/lib/supabase/types';

export async function createSupabaseServerClient() {
  const { supabaseURL, supabaseKey } = getSupabaseEnvVariables();
  const cookieStore = await cookies();

  return createServerClient<Database>(supabaseURL, supabaseKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options),
          );
        } catch {
          throw new Error('Error setting cookies');
        }
      },
    },
  });
}

export const createSupabaseServerClientWithoutCookies = () => {
  const { supabaseURL, supabaseKey } = getSupabaseEnvVariables();
  return createServerClient<Database>(supabaseURL, supabaseKey, {
    cookies: {
      getAll() {
        return [];
      },
      setAll() {
        // no-op: public client doesn't persist session cookies
      },
    },
  });
};
