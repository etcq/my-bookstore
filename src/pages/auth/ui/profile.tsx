'use client';
import { useState } from 'react';
import { Button } from '@/shared/ui/kit/button';
import { useForm } from 'react-hook-form';
import { mainInformationFields } from '@/features/auth';
import { DateSelect, FormControlledInput } from '@/shared/ui';
import { GenderSelect } from '@/features/auth';
import type { TUserInformationForm } from '@/features/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { userInformationSchema } from '@/features/auth';
import type { TUserData } from '@/entities/user/model/types';
import { updateUser } from '@/features/auth';

export const ProfilePage = ({ userData }: { userData: TUserData }) => {
  const [isEditing, setIsEditing] = useState(false);

  const { control, handleSubmit } = useForm<TUserInformationForm>({
    resolver: zodResolver(userInformationSchema),
    defaultValues: {
      email: userData.email ?? undefined,
      username: userData.username ?? undefined,
      firstName: userData.first_name ?? undefined,
      gender: (userData.gender as 'male' | 'female' | null) ?? 'male',
      lastName: userData.last_name ?? undefined,
      dateOfBirth: userData.date_of_birth ?? undefined,
    },
  });

  const onSubmit = async (data: TUserInformationForm) => {
    try {
      await updateUser(data);
      setIsEditing(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-14">
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
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(onSubmit)}
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
    </main>
  );
};
