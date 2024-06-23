import { Metadata } from 'next';
import Image from 'next/image';
import personalImg from '@/assets/images/personal.webp';

export const metadata: Metadata = {
  title: 'Ali Ataf',
};

export default async function Home() {
  return (
    <main>
      <Image src={personalImg} alt="My personal photo" unoptimized />
    </main>
  );
}
