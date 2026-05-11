'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { type KeyboardEvent, useState } from 'react';
import { Button, Input } from '@/shared/ui/kit';
import { Search } from 'lucide-react';
import { cn } from '@/shared/lib/tailwind-merge';

interface ISearchBarProps {
  className?: string;
}

export const SearchBar = ({ className }: ISearchBarProps) => {
  const params = useSearchParams();
  const searchedString = params?.get('search');
  const pathname = usePathname();
  const router = useRouter();
  const [value, setValue] = useState(searchedString ?? '');

  const updateSearch = () => {
    if (value === searchedString || !pathname) return;
    const newParams = new URLSearchParams(params?.toString() ?? '');
    if (value) {
      newParams.set('search', value);
    } else {
      newParams.delete('search');
    }
    router.push(`${pathname}?${newParams}`);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return;
    updateSearch();
  };

  return (
    <div className={cn('relative w-full', className)}>
      <Input
        type="text"
        className="w-full pr-10 md:text-xl"
        value={value}
        placeholder="Search books or authors..."
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
        onKeyDown={handleKeyDown}
      />
      <Button
        type="button"
        size="icon"
        aria-label="Search"
        className="absolute right-0 top-1/2 -translate-y-1/2"
        onClick={updateSearch}
      >
        <Search />
      </Button>
    </div>
  );
};
