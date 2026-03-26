import { BookList } from '@/widgets/book-list';
import { Suspense } from 'react';
import { Loading } from '@/shared/ui/loading';
import { SearchBar } from '@/features/search-bar';

interface ICatalogPageProps {
  searchParams: Promise<Record<string, string | undefined>>;
}

export async function CatalogPage({ searchParams }: ICatalogPageProps) {
  const params = await searchParams;
  const searchingString = params.search;
  return (
    <div className="flex h-full w-full flex-col items-center">
      <SearchBar />
      <Suspense fallback={<Loading />}>
        <BookList className="w-[70%]" searchedString={searchingString} />
      </Suspense>
    </div>
  );
}
