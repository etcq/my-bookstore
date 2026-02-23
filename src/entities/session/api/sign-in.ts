'use server';
import { createSupabaseServerClient } from '@/shared/lib/supabase/server-client';

interface ISignInData {
  email: string;
  password: string;
}

export const signIn = async (formData: ISignInData) => {
  const client = await createSupabaseServerClient();
  const { data, error } = await client.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  });
  if (error) {
    throw error;
  }
  return { data };
};
