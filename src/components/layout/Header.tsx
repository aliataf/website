import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
  { href: '/blog', label: 'Blog' },
];

export default function Header() {
  return (
    <header className='top-0 z-50'>
      <div className='layout flex justify-between items-center h-14'>
        <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
          &lt;Ali Ataf /&gt;
        </UnstyledLink>
        <nav>
          <ul className='flex justify-between items-center space-x-5'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='hover:text-purple-300'>
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
