import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: 'aliataf',
    background_color: '#0e0c38',
    description: 'Portfolio for Ali Ataf',
    dir: 'ltr',
    display: 'standalone',
    name: 'Ali Ataf',
    orientation: 'any',
    scope: '/',
    short_name: 'Ali',
    start_url: '/',
    theme_color: '#040121',
    categories: ['Portfolio'],
    icons: [
      { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
