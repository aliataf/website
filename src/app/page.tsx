import { Metadata } from 'next';
import Image from 'next/image';
import personalImg from '@/assets/images/personal.webp';
import { BgCircle } from '@/components';

export const metadata: Metadata = {
  title: 'Ali Ataf',
};

export default async function Home() {
  return (
    <main className="h-full flex flex-col md:flex-row justify-center md:justify-start items-center md:gap-40">
      <BgCircle className="flex flex-col gap-2">
        <p className="md:text-2xl font-light">Hey 👋, I am</p>
        <p className="text-2xl md:text-8xl font-extrabold">Ali</p>
        <p className="text-2xl md:text-8xl font-extrabold">Ataf</p>
        <p className="md:tracking-[5px] whitespace-nowrap">Senior Frontend Engineer</p>
      </BgCircle>
      <div className="w-72 h-72 md:w-96 md:h-96 relative">
        <Image src={personalImg} alt="My personal photo" priority fill />
      </div>
    </main>
  );
}
