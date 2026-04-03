import type { TBook } from '@/entities/book/model/types';

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
  const categories = [
    'all',
    ...Array.from(new Set(bookList.map((book) => book.genre))),
  ];
  const priceDiapason = [
    Math.floor(Math.min(...bookList.map((book) => book.price ?? 0))),
    Math.ceil(Math.max(...bookList.map((book) => book.price ?? 0))),
  ];
  const ratingDiapason = [
    Math.floor(Math.min(...bookList.map((book) => book.rating ?? 0))),
    Math.ceil(Math.max(...bookList.map((book) => book.rating ?? 0))),
  ];

  return { categories, priceDiapason, ratingDiapason };
};
