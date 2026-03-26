import { BookCard } from '@/entities/book';
import { getBooks } from '@/widgets/book-list/api/get-books';

interface IBookList {
  className?: string;
  searchedString?: string;
}

export const BookList = async ({
  className,
  searchedString = '',
}: IBookList) => {
  const data = await getBooks(searchedString);
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
