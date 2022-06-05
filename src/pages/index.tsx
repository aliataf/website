import { Photo, PrismaClient } from '@prisma/client';
import Image from 'next/image';
import * as React from 'react';

import { ViewportContext } from '@/hooks/viewport';

import BgCircle from '@/components/layout/BgCircle';
import Seo from '@/components/Seo';
import Button from '@/components/buttons/Button';

type HomeProps = {
	myPhoto: Photo;
};

export async function getStaticProps() {
	const prisma = new PrismaClient();
	const myPhoto: Photo =
		(await prisma.photo.findFirst({
			where: {
				projectId: 0,
			},
		})) || ({} as Photo);
	return {
		props: {
			myPhoto,
		},
	};
}

export default function Home({ myPhoto }: HomeProps) {
	return (
		<ViewportContext.Consumer>
			{({ isTabletOrBigger }) => (
				<>
					<Seo templateTitle="Home" />

					<section>
						<div
							className={`min-w-screen flex ${
								isTabletOrBigger ? 'flex-row-reverse justify-between' : 'flex-col'
							} items-center min-h-screen`}>
							<div></div>
							<div
								className={`h-7/12 ${
									isTabletOrBigger ? 'w-5/12 -translate-y-11' : 'w-11/12'
								}`}>
								<Image src={myPhoto.url} alt={myPhoto.alt} width="500px" height="500px" />
							</div>
							<BgCircle>
								<div className="text-2xl font-light">Hello, I am</div>
								<div className="text-8xl font-extrabold">Ali</div>
								<div className="text-8xl font-extrabold">Ataf</div>
								<div className="tracking-[5px] z-50 sm:tracking-[15px]">
									<span className="whitespace-nowrap">Frontend Engineer</span>
								</div>
								<div className="mt-3">
									<Button className="px-3 py-1 rounded-full hover:bg-accent">
										<a
											href="/resume/Ali_Ataf_Resume.pdf"
											download="Ali_Ataf_Resume.pdf"
											target="_blank">
											My Resume
										</a>
									</Button>
								</div>
							</BgCircle>
						</div>
					</section>
				</>
			)}
		</ViewportContext.Consumer>
	);
}
