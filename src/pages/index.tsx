import Image from 'next/image';
import * as React from 'react';

import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <section>
        <div className='min-w-screen flex justify-between items-center min-h-screen'>
          <div className='relative w-96 h-96'>
            <div className='bg-primary-light flex absolute -left-12 flex-col justify-center pl-28 w-96 h-96 rounded-full'>
              <div className='text-2xl font-light'>Hello, I am</div>
              <div className='text-8xl font-extrabold'>Ali</div>
              <div className='text-8xl font-extrabold'>Ataf</div>
              <div className='tracking-[5px] z-50 sm:tracking-[15px]'>
                <span className='whitespace-nowrap'>Frontend Developer</span>
              </div>
            </div>
          </div>
          <div className='h-7/12 w-5/12 -translate-y-11'>
            <Image
              src='/images/profile.png'
              alt='Profile picture'
              width='300'
              height='300'
              layout='responsive'
            />
          </div>
          <div>s</div>
        </div>
      </section>
    </>
  );
}
