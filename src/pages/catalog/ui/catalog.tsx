import { BookList } from '@/widgets/book-list';
import { checkParams } from '@/shared/lib/check-params';
import { BookSort } from '@/features/book-sort/';
import { getBooksCatalog } from '../api/get-books';
import { BooksFilter } from '@/features/books-filter';
import { FILTER_PARAM_NAMES } from '@/features/books-filter/model/filter-params-names';
import { SearchBar } from '@/features/books-search';
import { PaginationBar } from '@/features/books-pagination';

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
  const page = Number(checkParams(params, 'page') ?? 1);
  const catalogData = await getBooksCatalog(
    searchedString,
    sortPreset,
    filterParams,
    page,
  );
  return (
    <div className="flex h-full w-full flex-col items-center">
      <div className="w-full flex flex-row items-center justify-evenly px-4 py-2">
        <SearchBar key={searchedString} />
        <BookSort />
      </div>
      <div className="w-full flex md:flex-row md:items-start justify-center gap-4 px-4 py-2 md:px-10 md:py-6 flex-col items-center">
        <BooksFilter books={catalogData.data} />
        <BookList className="max-w-310 min-w-2/3" books={catalogData.data} />
      </div>
      <PaginationBar count={catalogData.count} className={'py-6'} />
    </div>
  );
}
