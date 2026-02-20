import React from 'react';
import { AuthMenu } from '@/features/auth-menu';
import { Heart, ShoppingCart } from 'lucide-react';
import { UserMenuLink } from '@/shared/ui/user-menu-link';
import { ThemeSwitcher } from '@/features/theme-switcher';
import { ROUTES } from '@/shared/routes';

export const UserMenu = () => {
  return (
    <div className="flex gap-3">
      <AuthMenu />
      <ThemeSwitcher />
      <UserMenuLink path={ROUTES.SHELF} hint="Shelf" forReader="My shelf">
        <Heart />
      </UserMenuLink>
      <UserMenuLink path={ROUTES.CART} hint="Cart" forReader="Shopping cart">
        <ShoppingCart />
      </UserMenuLink>
    </div>
  );
};
