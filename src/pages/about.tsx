import { motion } from 'framer-motion';
import { GetStaticProps, GetStaticPropsContext } from 'next';

import Button from '@/components/buttons/Button';
import BgCircle from '@/components/layout/BgCircle';
import Seo from '@/components/Seo';

export const asyncgetStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  return {
    props: {
      title: context,
    },
  };
};

type Props = {
  title: string;
};

export default function HomePage({ title }: Props) {
  return (
    <>
      <Seo templateTitle='About' />

      <section className='bg-secondary'>
        <div className='flex justify-between min-h-screen'>
          <BgCircle width='45vw' height='45vw' animate doubleBorder />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className='flex-1 pt-32'
          >
            <div className='flex items-center'>
              <div className='pr-6 text-3xl'>About Me</div>
              <motion.div
                className='flex-1 border border-yellow-400'
                style={{ height: '1px' }}
                initial={{ x: '100%' }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {title}
              </motion.div>
            </div>
            <div className='pr-16 mt-16 leading-10 text-gray-300'>
              I am a fresh graduated Software Engineer with 2+ years of
              experience in web development. I have a passion for building
              scalable and maintainable web applications. I am currently working
              as a Frontend Developer at{' '}
              <a
                href='https://www.nestech.org/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-yellow-400 transition-all duration-700 ease-in-out hover:underline'
              >
                Nestech
              </a>
              .
            </div>

            <div className='mt-16'>
              <Button className='px-6 py-4 rounded-full hover:bg-accent'>
                <a
                  href='/resume/Ali_Ataf_Resume.pdf'
                  download='Ali_Ataf_Resume.pdf'
                  target='_blank'
                >
                  My Resume
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
