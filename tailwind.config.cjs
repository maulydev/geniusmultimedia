/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {			
			keyframes: {
				anticlockwise : {
				  '0%, 100%': { transform: 'rotate(-15deg)' },
				  '50%': { transform: 'rotate(15deg)' },
				}
			},

			animation: {
				anticlockwise : 'spin 3s ease-in-out infinite',
			},
		},
	},
	plugins: [require('tailwind-scrollbar')],
	darkMode: 'class',
}
