import * as React from 'react';

import headerStyles from './Header.module.css';

import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
  { href: '/blog', label: 'Blog' },
];

export default function Header() {
  return (
    <header className='bg-primary sticky top-0 z-50 drop-shadow-lg'>
      <div className='layout flex justify-between items-center pb-1 h-16'>
        <UnstyledLink href='/' className='font-bold'>
          &lt;Ali Ataf /&gt;
        </UnstyledLink>
        <nav>
          <ul className='flex justify-between items-center space-x-5 h-16'>
            {links.map(({ href, label }) => (
              <UnstyledLink href={href} key={`${href}${label}`}>
                <li className={headerStyles.navItem} data-label={label}>
                  {label}
                </li>
              </UnstyledLink>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
