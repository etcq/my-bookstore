'use server';

import type { TUserInformationForm } from '@/pages/auth/model/schema/user-information.schema';
import { createSupabaseServerClient } from '@/shared/lib/supabase/server-client';

export const updateUser = async (formData: TUserInformationForm) => {
  const client = await createSupabaseServerClient();
  const { data, error } = await client.auth.updateUser({
    email: formData.email,
    data: formData,
  });
  if (error) {
    throw error;
  }
  return data;
};
