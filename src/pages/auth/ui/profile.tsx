'use client';
import { useLayoutEffect, useState } from 'react';
import { Button } from '@/shared/ui/kit/button';
import { useForm } from 'react-hook-form';
import type { TUserInformationForm } from '@/features/auth';
import {
  GenderSelect,
  mainInformationFields,
  updateUser,
  userInformationSchema,
} from '@/features/auth';
import { DateSelect, FormControlledInput } from '@/shared/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { getUserInfo } from '@/entities/user';
import { Loading } from '@/shared/ui/loading';

export const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { control, handleSubmit, reset } = useForm<TUserInformationForm>({
    resolver: zodResolver(userInformationSchema),
    mode: 'onChange',
  });

  useLayoutEffect(() => {
    getUserInfo()
      .then((data) => {
        reset({
          email: data.email ?? undefined,
          username: data.username ?? undefined,
          firstName: data.first_name ?? undefined,
          lastName: data.last_name ?? undefined,
          gender: data.gender as 'male' | 'female' | undefined,
          dateOfBirth: data.date_of_birth ?? undefined,
        });
      })
      .catch((error: unknown) => {
        console.error('Error fetching user data:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [reset]);

  const onSubmit = async (data: TUserInformationForm) => {
    try {
      await updateUser(data);
      setIsEditing(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      {isLoading ? (
        <div className="w-screen h-[calc(100vh-100px)] flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <div className="max-w-3xl mx-auto px-4 py-14">
          <div className="max-w-md mx-auto flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Profile</h1>
            <Button
              type="button"
              variant={isEditing ? 'outline' : 'default'}
              onClick={() => {
                setIsEditing((prev) => !prev);
              }}
            >
              {isEditing ? 'Cancel' : 'Edit'}
            </Button>
          </div>
          <form
            onSubmit={(e) => {
              void handleSubmit(onSubmit)(e);
            }}
            className="flex flex-col gap-4 max-w-md mx-auto mt-8"
          >
            {mainInformationFields.map((field) => (
              <FormControlledInput<TUserInformationForm>
                key={field.name}
                name={field.name}
                control={control}
                label={field.label}
                className="w-full"
                disabled={!isEditing}
              />
            ))}
            <GenderSelect<TUserInformationForm>
              name="gender"
              control={control}
              className="w-full"
              disabled={!isEditing}
            />
            <DateSelect<TUserInformationForm>
              name="dateOfBirth"
              control={control}
              className="w-full"
              disabled={!isEditing}
            />
            <Button className="mt-5 w-full" type="submit" disabled={!isEditing}>
              Save
            </Button>
          </form>
        </div>
      )}
    </main>
  );
};
