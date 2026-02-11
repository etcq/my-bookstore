import React from 'react';
import { ThemeSwitcher } from '@/features/theme-switcher';

export const Header = () => {
  return (
    <div className="border-b-2">
      This is the header component
      <ThemeSwitcher />
    </div>
  );
};
