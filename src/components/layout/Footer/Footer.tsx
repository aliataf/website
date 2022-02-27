import Image from 'next/image';
import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

const socials = [
	{ href: 'mailto:aliattaf98@gmail.com', label: 'Email' },
	{ href: 'https://www.github.com/aliataf', label: 'Github' },
	{ href: 'https://www.linkedin.com/in/ali-ataf', label: 'Linkedin' },
	{
		href: 'https://stackoverflow.com/users/7024690/ali-ataf',
		label: 'Stackoverflow',
	},
	{ href: 'https://twitter.com/AliAttaf1', label: 'Twitter' },
	{ href: 'https://aliataf.medium.com', label: 'Medium' },
	{ href: 'https://www.facebook.com/aliataf8', label: 'Facebook' },
	{ href: 'https://wa.me/+971502357409', label: 'Whatsapp' },
];

export default function Header() {
	return (
		<footer className="bg-primary flex gap-x-1 items-center px-3 pt-1 fixed bottom-0">
			{socials.map(({ href, label }) => (
				<UnstyledLink href={href} key={`${href}${label}`} className="text-white">
					<div className="text-red" style={{ color: 'red', fill: 'green' }}>
						<Image
							src={`/icons/${label.toLowerCase()}.svg`}
							alt={label}
							width="35px"
							height="35px"
							className="cursor-pointer hover:scale-105"
							unoptimized
						/>
					</div>
				</UnstyledLink>
			))}
		</footer>
	);
}
