'use client';

import { downloadCover } from '@/entities/book/api/download-cover';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Skeleton } from '@/shared/ui/kit/skeleton';

const defaultCoverPath = '/images/not-found.png';

interface IBookDetailedCoverProps {
  coverUrl: string | null;
  title: string | null;
}

export const BookDetailedCover = ({
  coverUrl,
  title,
}: IBookDetailedCoverProps) => {
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
    <div className="aspect-3/4 w-full flex justify-center bg-gray-900">
      {isLoading ? (
        <Skeleton className="w-full h-full" />
      ) : (
        <Image
          src={coverImageUrl ?? defaultCoverPath}
          alt={title ?? 'unknown book'}
          className=" w-full h-auto"
          width={500}
          height={500}
        />
      )}
    </div>
  );
};
