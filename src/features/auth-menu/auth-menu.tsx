import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/shared/ui/kit/dropdown-menu';
import { Button } from '@/shared/ui/kit/button';
import { User } from 'lucide-react';
import { UserMenuTrigger } from '@/shared/ui/user-menu-trigger';
import Link from 'next/link';
import { signOut } from '@/features/auth';
import { useSession } from '@/app/session-provider';
import { ROUTES } from '@/shared/routes';

export function AuthMenu() {
  const user = useSession();
  return (
    <DropdownMenu>
      <UserMenuTrigger hint="Sign in" forReader="authentication menu">
        <User />
      </UserMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuLabel className="text-center">
          {!user?.user_metadata.username
            ? 'Please sign in or sign up!'
            : `Hello ${user.user_metadata.username as string}`}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="flex items-center flex-col gap-2 p-2">
          {!user ? (
            <>
              <Button asChild>
                <Link href={ROUTES.LOGIN}>sign in</Link>
              </Button>
              <Button asChild>
                <Link href={ROUTES.REGISTRATION}>sign up</Link>
              </Button>
            </>
          ) : (
            <>
              <Button asChild>
                <Link href={ROUTES.PROFILE}>Profile</Link>
              </Button>
              <Button onClick={() => void signOut()}>Log out</Button>
            </>
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
