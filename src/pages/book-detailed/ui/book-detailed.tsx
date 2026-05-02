import { getBook } from '@/entities/book';
import { BookCover } from '@/entities/book';
import { notFound } from 'next/navigation';
import { Button } from '@/shared/ui/kit';
import { RatingStars } from '@/shared/ui/rating-stars';
import { BookDetailedParameter } from './book-detailed-parameter';

export const BookDetailedPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const book = await getBook(id);
  if (!book) {
    notFound();
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8">
      <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)_320px]">
        <aside className="space-y-3">
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <BookCover
              key={book.cover ?? 'no-cover'}
              coverUrl={book.cover}
              title={book.title}
            />
          </div>
        </aside>

        <main className="space-y-6 rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm">
          <div>
            <h1 className="text-3xl font-semibold leading-tight">
              {book.title ?? 'Untitled'}
            </h1>
            <p className="mt-2 text-muted-foreground">
              {book.author ? `by ${book.author}` : 'Unknown author'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <RatingStars rating={book.rating} />
              <span className="text-muted-foreground">
                {book.rating != null ? book.rating.toFixed(1) : 'No rating'}
              </span>
            </div>
            <span className="text-muted-foreground">4 reviews</span>
            <span className="text-muted-foreground">In stock</span>
          </div>

          <p className="whitespace-pre-line text-muted-foreground">
            {book.description ?? 'No description yet.'}
          </p>

          <div className="grid gap-3 text-sm">
            <BookDetailedParameter label="Category" value={book.category} />
            <BookDetailedParameter
              label="Pages"
              value={book.pages?.toString()}
            />
          </div>
        </main>

        <aside className="h-fit rounded-xl border border-border bg-card p-5 text-card-foreground shadow-sm">
          <p className="text-sm text-muted-foreground line-through">
            {book.price != null
              ? `$${(book.price * 1.15).toFixed(2)}`
              : 'Old price not set'}
          </p>
          <p className="mt-1 text-3xl font-bold text-primary">
            {book.price != null
              ? `$${book.price.toFixed(2)}`
              : 'Price on request'}
          </p>

          <Button className="mt-4 w-full" size="lg">
            Buy now
          </Button>

          <div className="mt-4 space-y-2 text-sm">
            <p className={book.in_stock ? 'text-emerald-600' : 'text-red-600'}>
              {book.in_stock ? 'In stock' : 'Not in stock'}
            </p>
            <p className="text-muted-foreground">Free delivery in 2-3 days</p>
          </div>
        </aside>
      </div>
    </section>
  );
};
