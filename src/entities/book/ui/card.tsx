import { Button } from '@/shared/ui/kit';
import type { TBookCard } from '../model/types';
import { RatingStars } from '@/shared/ui/rating-stars';
import { BookCover } from './book-cover';
import Link from 'next/link';

export const BookCard = ({
  id,
  title,
  price,
  author,
  rating,
  cover,
}: TBookCard) => {
  return (
    <div className="lg:w-[30%] w-70 h-120">
      <Link
        className="group relative flex h-full flex-col rounded-lg hover:shadow-xl hover:cursor-pointer transition-all duration-300 border border-border overflow-hidden bg-card text-card-foreground hover:bg-accent/60"
        href={`/catalog/${id}`}
      >
        <BookCover
          key={cover ?? 'no-cover'}
          coverUrl={cover}
          title={title}
          containerClassName="h-1/2 w-full flex justify-center bg-gray-900"
          imageClassName="h-full w-auto"
        />
        <div className="flex flex-col flex-1 p-4 gap-2">
          <h3 className="text-base font-semibold line-clamp-2 min-h-12">
            {title ?? 'Untitled'}
          </h3>
          {author && (
            <p className="text-sm text-muted-foreground line-clamp-1">
              {author}
            </p>
          )}

          <RatingStars rating={rating} />
          <div className="flex items-center justify-between pt-2 mt-auto border-t border-border group-hover:border-primary">
            <span className="text-lg font-bold">
              ${price != null ? price.toFixed(2) : '—'}
            </span>
            <Button size="sm" className="ml-auto">
              Buy Now
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};
