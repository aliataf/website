import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { Footer, Header } from '@/components';
import { rootLayoutMetadata } from './constant';

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
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
