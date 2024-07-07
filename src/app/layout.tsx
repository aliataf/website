import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { Header } from '@/components';
import { navItems, rootLayoutMetadata } from './constant';

const inter = Inter({ subsets: ['latin'] });

export const metadata = rootLayoutMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary h-screen flex flex-col justify-between`}>
        <Header items={navItems} />
        <div className="flex-1">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
