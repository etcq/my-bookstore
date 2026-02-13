import React from 'react';
import { AuthMenu } from '@/features/auth-menu';
import { Heart, ShoppingCart } from 'lucide-react';
import { UserMenuLink } from '@/shared/ui/user-menu-link';
import { ThemeSwitcher } from '@/features/theme-switcher';

export const UserMenu = () => {
  return (
    <div className="flex gap-3">
      <AuthMenu />
      <ThemeSwitcher />
      <UserMenuLink path="/shelf" hint="Shelf" forReader="My shelf">
        <Heart />
      </UserMenuLink>
      <UserMenuLink path="/cart" hint="Cart" forReader="Shopping cart">
        <ShoppingCart />
      </UserMenuLink>
    </div>
  );
};
