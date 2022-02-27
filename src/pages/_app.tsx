import { AppProps } from 'next/app';

import '@/styles/globals.css';

import { ViewportProvider } from '@/hooks/viewport';

import Layout from '@/components/layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ViewportProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ViewportProvider>
	);
}

export default MyApp;
