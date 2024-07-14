import Link from 'next/link';
import NavLink from './nav-link';

export const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
];

export function Header() {
  return (
    <header className="flex justify-between items-center px-16 h-16 bg-primary drop-shadow-lg">
      <Link href="/">
        <span className="font-bold text-white transition-all hover:text-action">
          &lt;Ali Ataf /&gt;
        </span>
      </Link>
      <nav>
        <ul className="flex justify-between items-center space-x-2 h-16 sm:space-x-5">
          {navItems.map(({ href, label }) => (
            <NavLink label={label} href={href} key={`${href}${label}`} />
          ))}
        </ul>
      </nav>
    </header>
  );
}
