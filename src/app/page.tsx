import { Metadata } from 'next';
import Image from 'next/image';
import personalImg from '@/assets/images/personal.webp';
import { BgCircle } from '@/components';

export const metadata: Metadata = {
  title: 'Ali Ataf',
};

export default async function Home() {
  return (
    <main className="h-full flex flex-col md:flex-row items-center md:gap-40 p-10 md:p-20">
      <BgCircle className="flex flex-col gap-2">
        <p className="md:text-2xl font-light">Hey 👋, I am</p>
        <p className="text-2xl md:text-8xl font-extrabold">Ali</p>
        <p className="text-2xl md:text-8xl font-extrabold">Ataf</p>
        <p className="md:tracking-[5px] whitespace-nowrap">Senior Frontend Engineer</p>
      </BgCircle>
      <Image src={personalImg} alt="My personal photo" unoptimized priority />
    </main>
  );
}
