import type { TBook } from '@/entities/book';
import { bookCategories } from '@/entities/book';

interface IUseBookListInformationProps {
  bookList: TBook[] | null;
}

export const useBookListInformation = ({
  bookList,
}: IUseBookListInformationProps) => {
  if (!bookList)
    return {
      categories: [],
      priceDiapason: [0, 0],
      ratingDiapason: [0, 0],
    };
  const categories = ['all', ...Object.values(bookCategories)];
  const priceDiapason =
    bookList.length === 0
      ? [0, 0]
      : [
          Math.floor(Math.min(...bookList.map((book) => book.price ?? 0))),
          Math.ceil(Math.max(...bookList.map((book) => book.price ?? 100))),
        ];
  const ratingDiapason = [
    Math.floor(Math.min(...bookList.map((book) => book.rating ?? 0))),
    Math.ceil(Math.max(...bookList.map((book) => book.rating ?? 10))),
  ];

  return { categories, priceDiapason, ratingDiapason };
};
