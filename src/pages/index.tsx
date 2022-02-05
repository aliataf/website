import { Blog, PrismaClient } from '@prisma/client';
import Image from 'next/image';
import * as React from 'react';

import { useViewport } from '@/hooks/viewport';

import BgCircle from '@/components/layout/BgCircle';
import Seo from '@/components/Seo';

import profilePic from '@/assets/me.png';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

type HomeProps = {
  blogs: Blog[];
};

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const blogs: Blog[] = await prisma.blog.findMany();

  return {
    props: {
      blogs,
    },
  };
}

export default function HomePage({ blogs }: HomeProps) {
  const { width } = useViewport();
  const isTabletOrBigger = width >= 768;

  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <div>{blogs[0].content}</div>

      <section>
        <div
          className={`min-w-screen flex ${
            isTabletOrBigger ? 'flex-row-reverse justify-between' : 'flex-col'
          } items-center min-h-screen`}
        >
          <div>s</div>
          <div
            className={`h-7/12 ${
              isTabletOrBigger ? 'w-5/12 -translate-y-11' : 'w-11/12'
            }`}
          >
            <Image src={profilePic} alt='Profile picture' />
          </div>
          <BgCircle>
            <div className='text-2xl font-light'>Hello, I am</div>
            <div className='text-8xl font-extrabold'>Ali</div>
            <div className='text-8xl font-extrabold'>Ataf</div>
            <div className='tracking-[5px] z-50 sm:tracking-[15px]'>
              <span className='whitespace-nowrap'>Frontend Developer</span>
            </div>
          </BgCircle>
        </div>
      </section>
    </>
  );
}
