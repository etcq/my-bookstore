'use client';

import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/shared/ui/kit/dropdown-menu';
import { Button } from '@/shared/ui/kit/button';
import { User } from 'lucide-react';
import { UserMenuTrigger } from '@/shared/ui/user-menu-trigger';

export function AuthMenu() {
  return (
    <DropdownMenu>
      <UserMenuTrigger hint="Sign in" forReader="authentication menu">
        <User />
      </UserMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuLabel className="text-center">
          Please sign in or sign up!
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="flex items-center flex-col gap-2 p-2">
          <Button>sign in</Button>
          <Button>sign up</Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
