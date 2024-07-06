import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { customMetadata } from './metadata';

const inter = Inter({ subsets: ['latin'] });

export const metadata = customMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
