'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Skeleton } from '@/shared/ui/kit';
import { downloadCover } from '../api/download-cover';

const defaultCoverPath = '/images/not-found.png';

interface IBookCoverProps {
  coverUrl: string | null;
  title: string | null;
  containerClassName?: string;
  imageClassName?: string;
}

export const BookCover = ({
  coverUrl,
  title,
  containerClassName,
  imageClassName,
}: IBookCoverProps) => {
  const [coverImageUrl, setCoverImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    downloadCover(coverUrl)
      .then((url) => {
        setCoverImageUrl(url);
      })
      .catch(() => {
        setCoverImageUrl(defaultCoverPath);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [coverUrl]);

  return (
    <div
      className={
        containerClassName ??
        'aspect-3/4 w-full flex justify-center bg-gray-900'
      }
    >
      {isLoading ? (
        <Skeleton className="h-full w-full" />
      ) : (
        <Image
          src={coverImageUrl ?? defaultCoverPath}
          alt={title ?? 'unknown book'}
          className={imageClassName ?? 'h-auto w-full'}
          width={500}
          height={500}
        />
      )}
    </div>
  );
};
