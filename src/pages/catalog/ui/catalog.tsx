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
    <div className="flex h-full w-full flex-col items-center px-2">
      <div className="flex w-full flex-col items-stretch gap-3 px-4 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <SearchBar
          key={searchedString}
          className="w-full min-w-0 sm:max-w-2xl sm:flex-1"
        />
        <BookSort className="w-full min-w-0 sm:w-56 sm:shrink-0" />
      </div>
      <div className="flex w-full flex-col items-stretch justify-center gap-4 px-4 py-2 md:flex-row md:items-start">
        <BooksFilter books={catalogData.data} />
        <BookList
          className="w-full min-w-0 flex-1 justify-center"
          books={catalogData.data}
        />
      </div>
      <PaginationBar
        count={catalogData.count}
        className="w-full justify-center px-4 py-4 md:py-6"
      />
    </div>
  );
}
