'use client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/kit/select';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { sortPresetsLabels } from '../model/sort-presets';

export const BookSort = () => {
  const params = useSearchParams();
  const sortingParam = params?.get('sortPreset');
  const pathname = usePathname();
  const router = useRouter();

  const updateSorting = (value: string) => {
    if (value === sortingParam || !pathname) return;
    const newParams = new URLSearchParams(params?.toString() ?? '');
    if (value) {
      newParams.set('sortPreset', value);
    } else {
      newParams.delete('sortPreset');
    }
    router.push(`${pathname}?${newParams}`);
  };

  const handleChange = (value: string) => {
    updateSorting(value);
  };

  return (
    <Select onValueChange={handleChange} defaultValue={sortingParam ?? ''}>
      <SelectTrigger className="w-full lg:w-50">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(sortPresetsLabels).map(([value, label]) => (
          <SelectItem value={value} key={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
