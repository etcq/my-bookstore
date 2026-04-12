'use client';
import { Button } from '@/shared/ui/kit/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';

interface IPaginationBarProps {
  count: number | null;
}

const booksPerPage = 9;

export const PaginationBar = ({ count }: IPaginationBarProps) => {
  const params = useSearchParams();
  const pageParam = Number(params?.get('page') ?? 1);
  const pathname = usePathname();
  const router = useRouter();
  const [, startTransition] = useTransition();
  if (count === null) return null;

  const changePage = (page: number) => {
    if (page === pageParam || !pathname) return;
    const newParams = new URLSearchParams(params?.toString() ?? '');
    newParams.set('page', String(page));
    startTransition(() => {
      router.push(`${pathname}?${newParams}`);
    });
  };
  return (
    <div className="flex flex-row items-center gap-2">
      <Button
        onClick={() => {
          changePage(pageParam - 1);
        }}
        disabled={pageParam === 1}
        className="bg-primary text-primary-foreground hover:bg-primary/90"
      >
        <ChevronLeft />
      </Button>
      Page {pageParam} of {Math.ceil(count / booksPerPage)}
      <Button
        onClick={() => {
          changePage(pageParam + 1);
        }}
        disabled={pageParam === Math.ceil(count / booksPerPage)}
        className="bg-primary text-primary-foreground hover:bg-primary/90"
      >
        <ChevronRight />
      </Button>
    </div>
  );
};
