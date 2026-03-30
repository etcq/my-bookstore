import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui/kit/carousel';
import { BookCard } from '@/entities/book';
import { getBooks } from '@/pages/catalog/api/get-books';

export const NewBooks = async () => {
  const books = (await getBooks()) ?? [];
  const multiplierBooks = [...books];

  return (
    <section className="py-14 bg-background">
      <p className="text-4xl text-center text-primary mb-8 font-semibold">
        New books
      </p>
      <Carousel
        className="w-[70%] mx-auto"
        opts={{
          loop: true,
          slidesToScroll: 1,
          breakpoints: {
            '(min-width: 768px)': { slidesToScroll: 2 },
            '(min-width: 1024px)': { slidesToScroll: 4 },
          },
        }}
      >
        <CarouselContent>
          {multiplierBooks.map(
            ({ author, price, title, rating, cover }, index) => (
              <CarouselItem className="lg:basis-1/4 md:basis-1/2" key={index}>
                <BookCard
                  author={author}
                  price={price}
                  title={title}
                  rating={rating}
                  cover={cover}
                />
              </CarouselItem>
            ),
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
