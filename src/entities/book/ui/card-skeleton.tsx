import { Skeleton } from '@/shared/ui/kit/skeleton';

export const CardSkeleton = () => {
  return (
    <div className="group relative flex flex-col w-full h-120 rounded-lg border border-border overflow-hidden bg-card text-card-foreground">
      <div className="w-full h-1/2 flex justify-center bg-gray-900">
        <Skeleton className="w-2/3 h-full rounded-none" />
      </div>

      <div className="flex flex-col flex-1 p-4 gap-2">
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-3/4" />

        <Skeleton className="h-3 w-1/2" />

        <div className="flex items-center gap-1">
          <Skeleton className="h-3 w-3 rounded-full" />
          <Skeleton className="h-3 w-3 rounded-full" />
          <Skeleton className="h-3 w-3 rounded-full" />
          <Skeleton className="h-3 w-3 rounded-full" />
          <Skeleton className="h-3 w-3 rounded-full" />
        </div>

        <div className="flex items-center justify-between pt-2 mt-auto border-t border-border">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-8 w-24" />
        </div>
      </div>
    </div>
  );
};
