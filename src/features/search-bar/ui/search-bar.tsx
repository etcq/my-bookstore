'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Input } from '@/shared/ui/kit/input';
import { type KeyboardEvent } from 'react';

export const SearchBar = () => {
  const params = useSearchParams();
  const searchedString = params?.get('search');
  const pathname = usePathname();
  const router = useRouter();

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return;
    const value = event.currentTarget.value;
    if (value === searchedString || !pathname) return;
    const newParams = new URLSearchParams(params?.toString() ?? '');
    if (value) {
      newParams.set('search', value);
    } else {
      newParams.delete('search');
    }
    router.push(`${pathname}?${newParams}`);
  };
  return (
    <Input
      type="text"
      className="w-2/3 my-4 text-4xl"
      defaultValue={searchedString ?? ''}
      onKeyDown={handleKeyDown}
    />
  );
};
