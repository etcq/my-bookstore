'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { bookSchema, type TBookForm } from '@/entities/book/model/book.schema';
import { FormControlledInput } from '@/shared/ui';
import { Button } from '@/shared/ui/kit/button';
import { bookParameters } from '@/entities/book/model/book-parametres';
import { createBook } from '@/features/create-book/api/create-book';

export const CreateBookForm = () => {
  const { control, handleSubmit, reset } = useForm<TBookForm>({
    resolver: zodResolver(bookSchema),
  });

  const onSubmit = async (data: TBookForm) => {
    try {
      await createBook(data);
      reset();
    } catch (error) {
      console.error('Error creating book:', error);
    }
  };

  return (
    <div className="w-1/2 m-auto">
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(onSubmit)}
      >
        {bookParameters.map((field) => (
          <FormControlledInput<TBookForm>
            key={field.name}
            name={field.name}
            label={field.label}
            control={control}
            type={field.type}
          />
        ))}
        <Button type="submit" className="mt-3">
          Create
        </Button>
      </form>
    </div>
  );
};
