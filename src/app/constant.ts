import { Metadata } from 'next';

export const rootLayoutMetadata: Metadata = {
  metadataBase: new URL('https://aliataf.com'),
  title: {
    default: 'Ali Ataf',
    template: '%s | Ali Ataf',
  },
  description:
    'Ali Ataf is a Senior Software Engineer with over 6 years of experience in web development. Specializing in React, Next.js, Angular, Vue.js, TypeScript, and Nest.js. Currently working at Tradeling.',
  publisher: 'Ali Ataf',
  creator: 'Ali Ataf',
  category: 'Portfolio',
  keywords: [
    'Ali Ataf',
    'Senior Software Engineer',
    'Software Engineer',
    'Web Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'Frontend Developer',
    'Full Stack Developer',
  ],
  twitter: {
    card: 'summary_large_image',
    site: '@aliataf_x',
    creator: '@aliataf_x',
    title: 'Ali Ataf - Senior Software Engineer',
    description:
      'Senior Software Engineer specializing in React, Next.js, TypeScript, and modern web technologies.',
  },
  openGraph: {
    type: 'profile',
    firstName: 'Ali',
    lastName: 'Ataf',
    username: 'aliataf',
    title: 'Ali Ataf - Senior Software Engineer',
    siteName: "Ali Ataf's Portfolio",
    description:
      'Senior Software Engineer with over 6 years of experience in web development. Specializing in React, Next.js, Angular, Vue.js, TypeScript, and Nest.js.',
    url: 'https://aliataf.com',
    emails: 'ali@aliataf.com',
    images: [
      {
        url: 'https://aliataf.com/images/personal.webp',
        width: 1200,
        height: 1200,
        alt: 'Ali Ataf - Senior Software Engineer',
      },
    ],
  },
  robots: 'index, follow',
  authors: { name: 'Ali Ataf', url: 'https://aliataf.com' },
  alternates: {
    canonical: 'https://aliataf.com',
  },
};
