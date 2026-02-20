'use client';
import React from 'react';
import { type CarouselApi } from '@/shared/ui/kit/carousel';

interface ICarouselDotsProps {
  api: CarouselApi;
}

export const CarouselDots = ({ api }: ICarouselDotsProps) => {
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="flex flex-row gap-1 items-center  justify-center">
      {Array.from({ length: count }).map((_, index) => (
        <div
          onClick={() => api?.scrollTo(index)}
          className={` relative bottom-4 w-5 h-3 bg-${index === current ? 'amber-300' : 'gray-400'} rounded text-gray-900 hover:cursor-pointer`}
          key={index}
        ></div>
      ))}
    </div>
  );
};
