import { BookCard } from '@/entities/book';
import { getBooks } from '@/widgets/book-list/api/get-books';

export const BookList = async ({ className }: { className?: string }) => {
  const data = await getBooks();
  return (
    <div className={`flex gap-4 m-4 flex-wrap ${className ?? ''}`}>
      {data.map(({ id, author, price, title, rating, cover }) => (
        <BookCard
          key={id}
          author={author}
          price={price}
          title={title}
          rating={rating}
          cover={cover}
        />
      ))}
    </div>
  );
};
