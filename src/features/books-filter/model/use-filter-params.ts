'use client';

import { useTransition } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FILTER_PARAM_NAMES } from './filter-params-names';

export const useFilterParams = () => {
  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [, startTransition] = useTransition();

  const navigate = (newParams: URLSearchParams) => {
    if (!pathname) return;
    startTransition(() => {
      router.replace(`${pathname}?${newParams}`, { scroll: false });
    });
  };

  const updateFilterParam = (name: string, value: string | null) => {
    const newParams = new URLSearchParams(params?.toString() ?? '');
    if (value === null) {
      newParams.delete(name);
    } else {
      newParams.set(name, value);
    }
    navigate(newParams);
  };

  const updateRangeParam = (
    fromName: string,
    toName: string,
    range: number[],
  ) => {
    const newParams = new URLSearchParams(params?.toString() ?? '');
    newParams.set(fromName, String(range[0]));
    newParams.set(toName, String(range[1]));
    navigate(newParams);
  };

  const resetFilterParams = (onReset?: () => void) => {
    const newParams = new URLSearchParams(params?.toString() ?? '');
    Object.values(FILTER_PARAM_NAMES).forEach((name) => {
      newParams.delete(name);
    });
    onReset?.();
    navigate(newParams);
  };

  return { params, updateFilterParam, updateRangeParam, resetFilterParams };
};
