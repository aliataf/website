import clsx from 'clsx';
import { useRouter } from 'next/router';
import * as React from 'react';

import headerStyles from './Header.module.css';

import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
	{ href: '/about', label: 'About' },
	{ href: '/projects', label: 'Projects' },
	/*   { href: '/contact', label: 'Contact' },
  { href: '/blog', label: 'Blog' }, */
];

export default function Header() {
	const router = useRouter();

	return (
		<header className="bg-primary sticky top-0 z-50 drop-shadow-lg">
			<div className="layout flex justify-between items-center pb-1 h-16">
				<UnstyledLink href="/" className="font-bold transition-all hover:text-action">
					&lt;Ali Ataf /&gt;
				</UnstyledLink>
				<nav>
					<ul className="flex justify-between items-center space-x-2 h-16 sm:space-x-5">
						{links.map(({ href, label }) => (
							<UnstyledLink href={href} key={`${href}${label}`}>
								<li
									className={clsx(headerStyles.navItem, {
										'text-action': router.pathname === href,
									})}
									data-label={label}>
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
