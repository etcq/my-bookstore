import type { Metadata } from 'next';
import './globals.css';
import { type ReactNode, Suspense } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import { Loading } from '@/shared/ui/loading';
import { ThemeProvider } from '@/app';

export const metadata: Metadata = {
  title: 'My book store',
  description: 'Buy a book and hire me',
};

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
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
          <Suspense fallback={<Loading />}>{children}</Suspense>;
        </ThemeProvider>
      </body>
    </html>
  );
}
