'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classes from './nav-link.module.css';

type NavLinkProps = {
  readonly label: string;
  readonly href: string;
};

export default function NavLink({ label, href }: NavLinkProps) {
  const path = usePathname();

  return (
    <Link
      href={href}
      prefetch={false}
      className={`${classes.link} ${path.startsWith(href) ? classes.active : ''}`}
      data-label={label}
      aria-label={label}
    >
      {label}
    </Link>
  );
}
