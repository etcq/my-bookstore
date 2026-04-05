'use server';

import { createSupabaseServerClient } from '@/shared/lib/supabase/server-client';
import type { TBookForm } from '@/entities/book';
import type { Tables } from '@/shared/lib/supabase/types';

export const createBook = async (formData: TBookForm) => {
  const payload: Omit<Tables<'books'>, 'id' | 'created_at'> = {
    author: formData.author ?? null,
    description: formData.description ?? null,
    genre: formData.genre ?? null,
    title: formData.title,
    pages: formData.pageCount,
    price: formData.price,
    rating: formData.rating ?? null,
    cover: formData.cover ?? null,
  };
  const client = await createSupabaseServerClient();

  const { error } = await client.from('books').insert(payload);
  if (error) throw error;
};
