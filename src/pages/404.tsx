import * as React from 'react';

import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';

export default function NotFoundPage() {
	return (
		<>
			<Seo templateTitle="Not Found" />
			<main>
				<section className="bg-white">
					<div className="layout flex flex-col justify-center items-center min-h-screen text-center text-black">
						<h1 className="mt-8 text-4xl md:text-6xl">Page Not Found</h1>
						<ArrowLink className="mt-4 md:text-lg" href="/">
							Back to Home
						</ArrowLink>
					</div>
				</section>
			</main>
		</>
	);
}
