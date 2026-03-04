'use client';
import { createContext, useContext } from 'react';
import type { User } from '@supabase/auth-js/src/lib/types.ts';

const SessionContext = createContext<User | null>(null);

export const SessionProvider = ({
  user,
  children,
}: {
  user: User | null;
  children: React.ReactNode;
}) => {
  return <SessionContext value={user}>{children}</SessionContext>;
};

export const useSession = () => useContext(SessionContext);
