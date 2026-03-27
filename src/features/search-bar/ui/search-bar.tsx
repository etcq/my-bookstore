'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Input } from '@/shared/ui/kit/input';
import { type KeyboardEvent, useState } from 'react';
import { Button } from '@/shared/ui/kit/button';
import { Search } from 'lucide-react';

export const SearchBar = () => {
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
    <div className="relative w-2/3">
      <Input
        type="text"
        className="w-full my-4 md:text-xl"
        value={value}
        placeholder="Search books or authors..."
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      <Button
        size="icon"
        className="absolute right-0 top-4"
        onClick={updateSearch}
      >
        <Search />
      </Button>
    </div>
  );
};
