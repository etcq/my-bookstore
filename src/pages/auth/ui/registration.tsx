'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { DateSelect, FormControlledInput, GenderSelect } from '@/shared/ui';
import { Button } from '@/shared/ui/kit/button';
import { mainInformationFields, passwordFields } from '../model/fields';
import {
  registrationSchema,
  type TRegistrationForm,
} from '../model/schema/registration.schema';
import Link from 'next/link';
import { signUp } from '@/entities/user';
import { useRouter } from 'next/navigation';
import { getUsernames } from '../model/get-usernames';

export function RegistrationPage() {
  const router = useRouter();
  const { handleSubmit, control, reset } = useForm<TRegistrationForm>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      username: '',
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmed: '',
      gender: 'male',
    },
  });

  const onSubmit = async (formData: TRegistrationForm) => {
    try {
      await getUsernames(formData.username);
      await signUp(formData);
      router.push('/auth/success');
    } catch (error) {
      console.error(error);
      reset();
    }
  };

  return (
    <div className="w-[500px] mx-auto text-center mt-10">
      <h2 className="text-center text-2xl">Sign up</h2>
      <span className="block mt-5 mb-2">Create a new account</span>
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-wrap gap-5 max-w-[600px] mx-auto mt-10 justify-center"
      >
        {mainInformationFields.map((field) => (
          <FormControlledInput<TRegistrationForm>
            key={field.name}
            name={field.name}
            control={control}
            label={field.label}
            className="w-[48%]"
          />
        ))}

        <div className="flex gap-5 w-full">
          {passwordFields.map((field) => (
            <FormControlledInput<TRegistrationForm>
              key={field.name}
              name={field.name}
              control={control}
              label={field.label}
              type={field.type}
            />
          ))}
        </div>
        <GenderSelect<TRegistrationForm> name="gender" control={control} />
        <DateSelect<TRegistrationForm> name="dateOfBirth" control={control} />
        <Button className="mt-5 w-full" type="submit">
          Registration
        </Button>
      </form>
      <span className="text-sm">
        Do you have an account?{' '}
        <Link href={'/login'} className="text-indigo-300 hover:text-indigo-50">
          Sign in.
        </Link>
      </span>
    </div>
  );
}
