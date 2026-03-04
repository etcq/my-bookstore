import { createBrowserClient } from '@supabase/ssr';
import { getSupabaseEnvVariables } from '@/shared/lib/supabase/get-supabase-env';
import type { Database } from '@/shared/lib/supabase/types';

export function createSupabaseBrowserClient() {
  const { supabaseURL, supabaseKey } = getSupabaseEnvVariables();
  return createBrowserClient<Database>(supabaseURL, supabaseKey);
}
