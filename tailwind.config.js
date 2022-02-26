module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: 'var(--color-primary)',
					light: 'var(--color-primary-light)',
				},
				secondary: 'var(--color-secondary)',
				accent: 'var(--color-accent)',
				action: 'var(--color-action)',
				dark: '#222222',
			},
		},
	},
	plugins: [],
};
