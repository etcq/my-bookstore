'use client';
import { Button } from '@/shared/ui/kit';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';
import { cn } from '@/shared/lib/tailwind-merge';

interface IPaginationBarProps {
  count: number | null;
  className?: string;
}

const booksPerPage = 9;

export const PaginationBar = ({ count, className }: IPaginationBarProps) => {
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
    <div className={cn('flex flex-row items-center gap-2', className)}>
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
