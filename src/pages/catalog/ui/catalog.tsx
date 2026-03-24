import { BookList } from '@/widgets/book-list';
import { Suspense } from 'react';
import { Loading } from '@/shared/ui/loading';

export const CatalogPage = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <Suspense fallback={<Loading />}>
        <BookList className="w-[70%]" />
      </Suspense>
    </div>
  );
};
