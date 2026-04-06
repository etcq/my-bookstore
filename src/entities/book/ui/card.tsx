'use client';
import { Button } from '@/shared/ui/kit/button';
import type { TBookCard } from '../model/types';
import { RatingStars } from '@/shared/ui/rating-stars';
import { useLayoutEffect, useState } from 'react';
import { downloadCover } from '../api/download-cover';
import Image from 'next/image';
import { CardSkeleton } from './card-skeleton';

const defaultCoverPath = '/images/not-found.png';

export const BookCard = ({
  title,
  price,
  author,
  rating,
  cover,
}: TBookCard) => {
  const [coverImageUrl, setCoverImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useLayoutEffect(() => {
    downloadCover(cover)
      .then((url) => {
        setCoverImageUrl(url);
      })
      .catch(() => {
        setCoverImageUrl(defaultCoverPath);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [cover]);
  return (
    <div className="w-80 h-120">
      {isLoading ? (
        <CardSkeleton />
      ) : (
        <div className=" group relative flex h-full flex-col rounded-lg hover:shadow-xl hover:cursor-pointer transition-all duration-300 border border-border overflow-hidden bg-card text-card-foreground hover:bg-accent/60">
          <div className="max-h-2/4 w-full flex justify-center bg-gray-900">
            <Image
              src={coverImageUrl ?? ''}
              alt={title ?? 'unknown book'}
              className=" w-auto h-full"
              width={500}
              height={500}
            />
          </div>
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
        </div>
      )}
    </div>
  );
};
