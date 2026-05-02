import React from 'react';
import { Button, DropdownMenuTrigger } from '@/shared/ui/kit';
import type { ReactNode } from 'react';

export interface IUserMenuTriggerProps {
  hint: string;
  children: ReactNode;
  forReader?: string;
}

export const UserMenuTrigger = ({
  hint,
  children,
  forReader,
}: IUserMenuTriggerProps) => {
  return (
    <DropdownMenuTrigger asChild>
      <Button
        variant="outline"
        size="icon"
        className="relative hover:cursor-pointer hover:text-amber-100"
      >
        {children}
        <span className="sr-only">{forReader ?? hint}</span>
        <span className="text-[12px] absolute top-9">{hint}</span>
      </Button>
    </DropdownMenuTrigger>
  );
};
