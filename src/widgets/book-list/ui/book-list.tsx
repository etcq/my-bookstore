import { BookCard } from '@/entities/book';
import type { TBook } from '@/entities/book';
import { cn } from '@/shared/lib/tailwind-merge';

interface IBookList {
  className?: string;
  books: TBook[] | null;
}

export const BookList = ({ className, books }: IBookList) => {
  return (
    <div className={cn('flex gap-4 flex-wrap', className)}>
      {!books || books.length === 0 ? (
        <p>Books not found</p>
      ) : (
        books.map(({ id, author, price, title, rating, cover }) => (
          <BookCard
            key={id}
            author={author}
            price={price}
            title={title}
            rating={rating}
            cover={cover}
          />
        ))
      )}
    </div>
  );
};
