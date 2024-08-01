import Link from 'next/link';
import NavLink from './nav-link';

export const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
];

export function Header() {
  return (
    <header
      className="flex justify-between items-center px-8 md:px-16 h-16 bg-primary drop-shadow-lg"
      role="banner"
    >
      <Link href="/" aria-label="Homepage">
        <span className="font-bold text-white transition-all hover:text-action">
          &lt;Ali Ataf /&gt;
        </span>
      </Link>
      <nav aria-label="Main navigation">
        <ul className="flex justify-between items-center space-x-2 h-16 sm:space-x-5">
          {navItems.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <NavLink label={label} href={href} aria-label={`Navigate to ${label} page`} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
