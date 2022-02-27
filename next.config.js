/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	basePath: '/docs',
	assetPrefix: '.',
	images: {
		loader: 'imgix',
		path: 'https://noop/',
	},
};

module.exports = nextConfig;
