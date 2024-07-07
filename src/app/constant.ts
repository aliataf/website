import { NavItem } from '@/components';
import { Metadata } from 'next';

export const rootLayoutMetadata: Metadata = {
  metadataBase: new URL('https://aliataf.com'),
  title: {
    default: 'Ali Ataf',
    template: '%s | Ali Ataf',
  },
  description: "Ali Ataf's website",
  publisher: 'Ali Ataf',
  creator: 'Ali Ataf',
  category: 'Portfolio',
  twitter: {
    card: 'summary_large_image',
    site: '@aliataf_x',
    creator: '@aliataf_x',
    images: 'https://example.com/og.png',
    title: 'My Twitter account',
    description: 'My Twitter account',
  },
  openGraph: {
    type: 'website',
    title: 'Ali Ataf',
    siteName: "Ali Ataf's website",
    description: "Ali Ataf's website",
    url: 'https://aliataf.com',
    emails: 'ali@aliataf.com',
  },
  robots: 'index, follow',
  authors: { name: 'Ali Ataf', url: 'https://aliataf.com' },
};

export const navItems: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
];
