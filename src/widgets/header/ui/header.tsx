'use client';

import React from 'react';
import { Logo } from './logo';
import { HeaderNavigation } from '@/features/header-navigation';
import Link from 'next/link';
import { UserMenu } from './user-menu';

export const Header = () => {
  return (
    <header className="border-b bg-background dark:bg-background backdrop-blur h-[100px] w-full">
      <div className="flex items-center justify-between max-w-[1240px] px-4 mx-auto">
        <Link href={'/'}>
          <Logo />
        </Link>
        <HeaderNavigation />
        <UserMenu />
      </div>
    </header>
  );
};
