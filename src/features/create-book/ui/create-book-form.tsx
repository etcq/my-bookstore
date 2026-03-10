'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { bookSchema, type TBookForm } from '@/entities/book/model/book.schema';
import { FormControlledInput } from '@/shared/ui';
import { Button } from '@/shared/ui/kit/button';
import { bookParameters } from '@/entities/book/model/book-parametres';
import { createBook } from '@/features/create-book/api/create-book';
import { CoverImageSelect } from '@/features/create-book/ui/cover-image-select';

export const CreateBookForm = () => {
  const { control, handleSubmit } = useForm<TBookForm>({
    resolver: zodResolver(bookSchema),
  });

  const onSubmit = async (data: TBookForm) => {
    try {
      await createBook(data);
    } catch (error) {
      console.error('Error creating book:', error);
    }
  };

  return (
    <div className="w-1/2 m-auto flex items-center justify-center">
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
        <CoverImageSelect name="cover" label="Cover" control={control} />

        <Button type="submit" className="mt-3">
          Create
        </Button>
      </form>
    </div>
  );
};
