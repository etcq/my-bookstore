'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/shared/ui/kit/button';

interface IBookCardProps {
  id?: string;
  title?: string;
  description?: string;
  price?: number;
  currency?: string;
  imageUrl?: string;
  author?: string;
  onBuyClick?: (id?: string) => void;
}

export const BookCard = ({
  id,
  title = 'Book title',
  description = 'This is book description',
  price = 0,
  currency = '$',
  imageUrl = '/images/slide.jpg',
  author,
  onBuyClick,
}: IBookCardProps) => {
  return (
    <div className="group relative flex flex-col w-full h-100 bg-white dark:bg-gray-900 rounded-lg hover:shadow-xl hover:cursor-pointer transition-all duration-300 border border-gray-200 overflow-hidden dark:border-gray-800 hover:bg-gray-300 hover:dark:bg-gray-700">
      <div className="relative h-2/3 w-auto">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 240px"
        />
      </div>

      <div className="flex flex-col flex-1 p-4 gap-2">
        <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 line-clamp-2 min-h-12">
          {title}
        </h3>

        {author && (
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1">
            {author}
          </p>
        )}

        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 flex-1">
          {description}
        </p>
        <div className="flex items-center justify-between pt-2 mt-auto border-t border-gray-300 dark:border-gray-800 group-hover:border-white group-hover:dark:border-gray-900">
          <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
            {currency}
            {price.toFixed(2)}
          </span>
          <Button
            size="sm"
            onClick={() => onBuyClick?.(id)}
            className="ml-auto"
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};
