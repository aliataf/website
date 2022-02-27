import { AppProps } from 'next/app';
import Script from 'next/script';

import '@/styles/globals.css';

import { ViewportProvider } from '@/hooks/viewport';

import Layout from '@/components/layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ViewportProvider>
			<Script
				src="https://www.googletagmanager.com/gtag/js?id=G-91BH0596YL"
				strategy="afterInteractive"
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-91BH0596YL');
        `}
			</Script>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ViewportProvider>
	);
}

export default MyApp;
