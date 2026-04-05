import { BookList } from '@/widgets/book-list';
import { checkParams } from '@/shared/lib/check-params';
import { BookSort } from '@/features/book-sort/';
import { getBooksCatalog } from '../api/get-books';
import { BooksFilter } from '@/features/books-filter';
import { FILTER_PARAM_NAMES } from '@/features/books-filter/model/filter-params-names';
import { SearchBar } from '@/features/books-search';

interface ICatalogPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export async function CatalogPage({ searchParams }: ICatalogPageProps) {
  const params = await searchParams;
  const searchedString = checkParams(params, 'search');
  const sortPreset = checkParams(params, 'sortPreset');
  const filterParams = Object.fromEntries(
    Object.values(FILTER_PARAM_NAMES).map((name) => [
      name,
      checkParams(params, name),
    ]),
  );
  const books = await getBooksCatalog(searchedString, sortPreset, filterParams);
  return (
    <div className="flex h-full w-full flex-col items-center">
      <div className="w-full flex flex-row items-center justify-evenly px-4 py-2">
        <SearchBar key={searchedString} />
        <BookSort />
      </div>
      <div className="w-full flex flex-row items-start justify-center gap-4 px-4 py-2">
        <BooksFilter books={books} />
        <BookList className="w-[70%]" books={books} />
      </div>
    </div>
  );
}
