'use server';
import { dataBaseColsName } from '@/entities/user/model/constants';
import { createSupabaseServerClient } from '@/shared/lib/supabase/server-client';
import type { TRegistrationForm } from '@/features/auth';

export const signUp = async (formData: TRegistrationForm) => {
  const client = await createSupabaseServerClient();
  const { data, error } = await client.auth.signUp({
    email: formData.email,
    password: formData.password,
    options: {
      data: {
        [dataBaseColsName.USERNAME]: formData.username,
        [dataBaseColsName.EMAIL]: formData.email,
        [dataBaseColsName.FIRST_NAME]: formData.firstName,
        [dataBaseColsName.LAST_NAME]: formData.lastName,
        [dataBaseColsName.DATE_OF_BIRTH]: formData.dateOfBirth,
        [dataBaseColsName.GENDER]: formData.gender,
      },
    },
  });
  if (error) {
    throw error;
  }

  return { data };
};
