import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import type { ReactNode } from 'react';
import { Header } from '@/widgets/header';
import { ThemeProvider } from '@/app';
import { TooltipProvider } from '@/shared/ui/kit/tooltip';
import { SessionProvider } from '@/app/session-provider';
import { getSessionUser } from '@/entities/user/api/get-session-user';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'My book store',
  description: 'Buy a book and hire me',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const user = await getSessionUser();
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider user={user}>
            <TooltipProvider>
              <Header />
              <main className="h-[87vh]">{children}</main>
            </TooltipProvider>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
