import Image from 'next/image';
import * as React from 'react';

import { useViewport } from '@/hooks/viewport';

import Seo from '@/components/Seo';

import profilePic from '@/assets/me.png';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  const { width } = useViewport();
  const isTabletOrBigger = width >= 768;

  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

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
          <div className='h-96 relative w-96'>
            <div className='-left-12 absolute bg-primary-light flex flex-col h-96 justify-center pl-28 rounded-full w-96'>
              <div className='font-light text-2xl'>Hello, I am</div>
              <div className='font-extrabold text-8xl'>Ali</div>
              <div className='font-extrabold text-8xl'>Ataf</div>
              <div className='tracking-[5px] z-50 sm:tracking-[15px]'>
                <span className='whitespace-nowrap'>Frontend Developer</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
