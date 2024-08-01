import Image from 'next/image';
import emailIcon from '@/assets/icons/email.svg';
import githubIcon from '@/assets/icons/github.svg';
import linkedinIcon from '@/assets/icons/linkedin.svg';
import stackoverflowIcon from '@/assets/icons/stackoverflow.svg';
import twitterIcon from '@/assets/icons/twitter.svg';
import mediumIcon from '@/assets/icons/medium.svg';
import facebookIcon from '@/assets/icons/facebook.svg';
import whatsappIcon from '@/assets/icons/whatsapp.svg';
import Link from 'next/link';

const footerItems = [
  { href: 'mailto:ali@aliataf.com', alt: 'Email', src: emailIcon },
  { href: 'https://www.github.com/aliataf', alt: 'Github', src: githubIcon },
  { href: 'https://www.linkedin.com/in/ali-ataf', alt: 'Linkedin', src: linkedinIcon },
  {
    href: 'https://stackoverflow.com/users/7024690/ali-ataf',
    alt: 'Stackoverflow',
    src: stackoverflowIcon,
  },
  { href: 'https://twitter.com/AliAttaf1', alt: 'Twitter', src: twitterIcon },
  { href: 'https://aliataf.medium.com', alt: 'Medium', src: mediumIcon },
  { href: 'https://www.facebook.com/aliataf8', alt: 'Facebook', src: facebookIcon },
  { href: 'https://wa.me/+971502357409', alt: 'Whatsapp', src: whatsappIcon },
];

export function Footer() {
  return (
    <footer
      className="bg-primary flex gap-1 items-center px-3 py-1 border-t-2 border-primary-light"
      aria-label="Footer with social media links"
    >
      {footerItems.map(({ href, alt, src }) => (
        <Link href={href} key={href} target="_blank" rel="noopener noreferrer" aria-label={alt}>
          <Image
            src={src}
            alt={alt}
            width={35}
            height={35}
            className="cursor-pointer hover:scale-105"
          />
        </Link>
      ))}
    </footer>
  );
}
