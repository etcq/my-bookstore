import { createServerClient } from '@supabase/ssr';
import { getSupabaseEnvVariables } from '@/shared/lib/supabase/get-supabase-env';
import { type Database } from '@/shared/lib/supabase/types';

export const createSupabaseServerClientWithoutCookies = () => {
  const { supabaseURL, supabaseKey } = getSupabaseEnvVariables();
  console.log('client');
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
