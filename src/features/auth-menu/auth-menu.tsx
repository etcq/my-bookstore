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
import { signOut } from '@/entities/session/api/sign-out';
import { useSession } from '@/app/session-provider';

export function AuthMenu() {
  const user = useSession();
  return (
    <DropdownMenu>
      <UserMenuTrigger hint="Sign in" forReader="authentication menu">
        <User />
      </UserMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuLabel className="text-center">
          {user?.email ? `Hello ${user.email}` : 'Please sign in or sign up!'}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="flex items-center flex-col gap-2 p-2">
          {!user ? (
            <>
              <Button asChild>
                <Link href="/login">sign in</Link>
              </Button>
              <Button asChild>
                <Link href="/registration">sign up</Link>
              </Button>
            </>
          ) : (
            <Button onClick={() => void signOut()}>Log out</Button>
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
