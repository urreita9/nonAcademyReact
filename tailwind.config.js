module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		extend: {
			colors: {
				grey: '#595959',
				purple: '#9D76F1',
				darkBlue: '#3B82F6',
				lightBlue: '#86B2FA',
			},
		},
	},
	plugins: [],
};
