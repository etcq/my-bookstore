'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FormControlledInput } from '@/shared/ui';
import { Button } from '@/shared/ui/kit/button';
import { loginFields } from '../model/fields';
import { loginSchema, type TLoginForm } from '../model/schema/login.schema';
import Link from 'next/link';

export function LoginPage() {
  const { control, handleSubmit } = useForm<TLoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <div className="w-[400px] mx-auto text-center mt-20">
      <h2 className="text-center text-2xl">Sign In</h2>
      <span className="block mt-5 mb-2">
        Enter your email and password below to login to your account
      </span>

      <form
        onSubmit={() => handleSubmit}
        className="flex flex-col gap-5 max-w-sm mx-auto"
      >
        {loginFields.map((field) => (
          <FormControlledInput<TLoginForm>
            key={field.name}
            name={field.name}
            label={field.label}
            control={control}
            type={field.type}
          />
        ))}
        <Button type="submit" className="mt-3">
          Login
        </Button>
      </form>
      <span className="text-sm">
        Don&apos;t have an account?{' '}
        <Link
          href={'/registration'}
          className="text-indigo-300 hover:text-indigo-50"
        >
          Sign up.
        </Link>
      </span>
    </div>
  );
}
