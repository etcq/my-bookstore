import { Header } from '@/widgets/header';
import { TooltipProvider } from '@/shared/ui/kit';
import { SessionProvider } from '@/app';
import { getSessionUser } from '@/entities/user';

export default async function SessionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getSessionUser();
  return (
    <SessionProvider user={user}>
      <TooltipProvider>
        <Header />
        <main className="h-[calc(100vh-80px)]">{children}</main>
      </TooltipProvider>
    </SessionProvider>
  );
}
