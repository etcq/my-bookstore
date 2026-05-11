import React, { type ReactNode } from 'react';
import Link from 'next/link';
import { Button } from '@/shared/ui/kit';

export interface IUserMenuLinkProps {
  hint: string;
  children: ReactNode;
  path: string;
  forReader?: string;
}

export const UserMenuLink = ({
  children,
  hint,
  forReader,
  path,
}: IUserMenuLinkProps) => {
  return (
    <Link href={path}>
      <Button
        variant="outline"
        size="icon"
        className="relative hover:cursor-pointer hover:text-amber-100"
      >
        {children}
        <span className="sr-only">{forReader ?? hint}</span>
        <span className="text-[12px] absolute top-9">{hint}</span>
      </Button>
    </Link>
  );
};
