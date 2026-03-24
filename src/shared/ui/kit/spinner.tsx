import { LoaderIcon } from 'lucide-react';
import { ComponentProps } from 'react';
import { cn } from '@/shared/lib/tailwind-merge';

function Spinner({ className, ...props }: ComponentProps<'svg'>) {
  return (
    <LoaderIcon
      role="status"
      aria-label="Loading"
      className={cn('size-4 animate-spin', className)}
      {...props}
    />
  );
}

export { Spinner };
