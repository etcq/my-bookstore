export const getSupabaseEnvVariables = () => {
  const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseURL || !supabaseKey) {
    throw new Error("Can't find supabase environment configuration");
  }

  return { supabaseKey, supabaseURL };
};
