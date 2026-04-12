import React from 'react';
import { Spinner } from '@/shared/ui/kit/spinner';

export const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70%] w-full gap-4">
      <Spinner className="size-16 flex items-center" />
    </div>
  );
};
