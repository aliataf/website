'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classes from './nav-link.module.css';
import { NavItem } from './header';

export default function NavLink({ label, href }: NavItem) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`${classes.link} ${path.startsWith(href) ? classes.active : ''}`}
      data-label={label}
    >
      {label}
    </Link>
  );
}
