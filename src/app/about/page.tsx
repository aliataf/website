import { BgCircle } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

export default function About() {
  return (
    <section className="flex justify-between">
      <BgCircle className="hidden md:block md:w-[44vw] md:h-[44vw] border-[44px] border-accent" />
      <div className="flex-1 p-4 sm:pt-32">
        <div>
          <div className="flex items-center mt-6">
            <h1 className="pr-6 text-3xl">About</h1>
            <hr className="flex-1 border border-yellow-400 h-px" />
          </div>
          <div className="mt-6 leading-10 text-gray-300 sm:pr-16 sm:mt-4">
            <p>
              I am a Senior Frontend Engineer with over 5 years of experience in web development,
              specializing in building scalable and maintainable web applications. Currently, I am
              working at{' '}
              <a
                href="https://www.tradeling.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 transition-all duration-700 ease-in-out hover:underline"
                aria-label="Tradeling website"
              >
                Tradeling
              </a>
              .
            </p>
            <p>
              My journey in coding began in 2012, at the age of 14, with Visual Basic 6.0, where I
              created numerous programs and games (though none were uploaded to a public
              repository). Shortly after, I transitioned to JavaScript, which I have been using
              extensively ever since. My expertise includes technologies such as{' '}
              <span className="font-bold">
                React, Next.js, Angular, Vue.js, TypeScript, Tailwind CSS, and Sass
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
