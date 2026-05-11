import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui/kit';
import { BookCard } from '@/entities/book';
import { getBooksCatalog } from '@/pages/catalog/api/get-books';

export const NewBooks = async () => {
  const { data } = await getBooksCatalog();
  if (!data) return null;
  const multiplierBooks = [...data];

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
            ({ id, author, price, title, rating, cover }, index) => (
              <CarouselItem className="lg:basis-1/4 md:basis-1/2" key={index}>
                <BookCard
                  id={id}
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
