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
    <div className="mx-auto flex flex-col items-center justify-center  py-6">
      <Carousel
        className="lg:w-[60%] md:w-[80%] sm:w-full"
        plugins={[Autoplay({ delay: 4000 })]}
        setApi={setApi}
      >
        <CarouselContent>
          <CarouselItem className="border-2 ">
            <div className="h-100 w-full bg-[url(/images/slide.jpg)] bg-cover bg-center p-4">
              <h3 className="text-3xl m-4 text-shadow-2xs">Promo 1</h3>
              <span>Get new discount</span>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="h-75 w-full bg-[url(/images/books.png)] bg-cover bg-center p-4">
              <h3 className="text-3xl m-4 text-shadow-2xs">Promo 2</h3>
              <span>Get new discount</span>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div>
              <h3>Slide 3</h3>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <CarouselDots api={api} />
    </div>
  );
};
