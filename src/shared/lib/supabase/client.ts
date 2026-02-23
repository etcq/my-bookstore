import { createBrowserClient } from '@supabase/ssr';
import { getSupabaseEnvVariables } from '@/shared/lib/supabase/get-supabase-env';

export function createClient() {
  const { supabaseURL, supabaseKey } = getSupabaseEnvVariables();
  return createBrowserClient(supabaseURL, supabaseKey);
}
