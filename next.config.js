/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	assetPrefix: '.',
	images: {
		loader: 'imgix',
		path: 'https://noop/',
	},
};

module.exports = nextConfig;
