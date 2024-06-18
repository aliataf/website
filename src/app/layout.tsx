import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ali Ataf",
  description: "Ali Ataf's website",
  publisher: "Ali Ataf",
  creator: "Ali Ataf",
  category: "Portfolio",
  twitter: {
    card: "summary_large_image",
    site: "@aliataf_x",
    creator: "@aliataf_x",
    images: "https://example.com/og.png",
    title: "My Twitter account",
    description: "My Twitter account",
  },
  openGraph: {
    type: "website",
    title: "Ali Ataf",
    siteName: "Ali Ataf's website",
    description: "Ali Ataf's website",
    url: "https://aliataf.com",
    emails: "ali@aliataf.com",
  },
  robots: "index, follow",
  authors: { name: "Ali Ataf", url: "https://aliataf.com" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
