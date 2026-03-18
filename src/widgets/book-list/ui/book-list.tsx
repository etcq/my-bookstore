import { BookCard, CardSkeleton } from '@/entities/book';
import type { Tables } from '@/shared/lib/supabase/types';
import { getBooks } from '@/widgets/book-list/api/get-books';
import { Suspense } from 'react';

export const BookList = async () => {
  const data: Tables<'books'>[] = await getBooks();
  return (
    <div className="flex gap-4 m-4">
      {data.map(({ id, author, price, title, rating, cover }) => (
        <Suspense fallback={<CardSkeleton />} key={id}>
          <BookCard
            key={id}
            author={author}
            price={price}
            title={title}
            rating={rating}
            cover={cover}
          />
        </Suspense>
      ))}
    </div>
  );
};
