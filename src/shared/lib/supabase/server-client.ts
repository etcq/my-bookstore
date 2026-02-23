import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { getSupabaseEnvVariables } from '@/shared/lib/supabase/get-supabase-env';

export async function createSupabaseServerClient() {
  const { supabaseURL, supabaseKey } = getSupabaseEnvVariables();
  const cookieStore = await cookies();

  return createServerClient(supabaseURL, supabaseKey, {
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
