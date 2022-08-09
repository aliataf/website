/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	basePath: '/website',
	images: {
		loader: 'imgix',
		path: 'https://noop/',
	},
};

module.exports = nextConfig;
