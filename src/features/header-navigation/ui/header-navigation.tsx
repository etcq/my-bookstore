import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/shared/ui/kit/navigation-menu';
import { menuItems } from '../model/menu-items-data';
import Link from 'next/link';

export function HeaderNavigation() {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList className="flex flex-row gap-1">
          {menuItems.map((item) => (
            <NavigationMenuItem
              key={item.name}
              className="p-2 rounded-sm text-sm font-medium text-muted-foreground hover:text-accent-foreground hover:bg-accent transition-colors"
            >
              <Link href={item.href}>{item.name}</Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
