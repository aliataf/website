import Button from '@/components/buttons/Button';
import BgCircle from '@/components/layout/BgCircle';
import Seo from '@/components/Seo';

export function getStaticProps() {
	return {
		props: {},
	};
}

export default function HomePage() {
	return (
		<>
			<Seo templateTitle="About" />

			<section className="bg-secondary">
				<div className="block justify-between sm:flex">
					<BgCircle width="45vw" height="45vw" doubleBorder />
					<div className="flex-1 p-4 sm:pt-32">
						<div>
							<div className="flex items-center mt-6">
								<div className="pr-6 text-3xl">About Me</div>
								<div
									className="flex-1 border border-yellow-400"
									style={{ height: '1px' }}></div>
							</div>
							<div className="mt-6 leading-10 text-gray-300 sm:pr-16 sm:mt-4">
								I am a Software Engineer with over 4 years of experience in web development.
								I have a passion for building scalable and maintainable web applications. I
								am currently working as a Frontend Engineer at{' '}
								<a
									href="https://supy.io/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-yellow-400 transition-all duration-700 ease-in-out hover:underline">
									Supy
								</a>
								.
								<br />
								Actually, I started to code in 2012 (14 years old), with Visual Basic 6.0
								and I built a lot of programs and games in it(Unfortunately, I didn&apos;t
								upload them to any public repository 😢).
								<br />
								Then, I started to learn JavaScript and I have been using it since then. I
								have been working with technologies like{' '}
								<span className="font-bold">
									{' '}
									Angular, React, Next.js, Vue.js, Typescript, Tailwindcss and Sass.
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
