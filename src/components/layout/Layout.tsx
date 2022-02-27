import * as React from 'react';

import Footer from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
	// Put Header or Footer Here
	return (
		<div className="bg-primary text-white">
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
