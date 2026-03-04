'use client';
import React, { useState } from 'react';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/shared/ui/kit/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { CarouselDots } from '@/shared/ui/carousel-dots';

export const PromoSlider = () => {
  const [api, setApi] = useState<CarouselApi>();
  return (
    <section className="mx-auto flex flex-col items-center justify-center py-10 bg-muted">
      <Carousel
        className="lg:w-[60%] md:w-[80%] sm:w-full"
        plugins={[Autoplay({ delay: 4000 })]}
        setApi={setApi}
      >
        <CarouselContent>
          <CarouselItem className="border border-border rounded-xl overflow-hidden bg-card text-card-foreground">
            <div className="h-100 w-full bg-[url(/images/slide.jpg)] bg-cover bg-center p-6 flex flex-col justify-end bg-black/40 bg-blend-multiply">
              <h3 className="text-3xl mb-2 text-background drop-shadow">
                Promo 1
              </h3>
              <span className="text-background/90 text-sm">
                Get new discount
              </span>
            </div>
          </CarouselItem>
          <CarouselItem className="border border-border rounded-xl overflow-hidden bg-card text-card-foreground">
            <div className="h-75 w-full bg-[url(/images/books.png)] bg-cover bg-center p-6 flex flex-col justify-end bg-black/40 bg-blend-multiply">
              <h3 className="text-3xl mb-2 text-background drop-shadow">
                Promo 2
              </h3>
              <span className="text-background/90 text-sm">
                Get new discount
              </span>
            </div>
          </CarouselItem>
          <CarouselItem className="border border-border rounded-xl overflow-hidden bg-card text-card-foreground flex items-center justify-center h-75">
            <h3 className="text-2xl font-semibold">Slide 3</h3>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <CarouselDots api={api} />
    </section>
  );
};
