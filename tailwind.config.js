import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {
			colors: {
				primary: colors.amber,
				light: colors.slate,
				dark: colors.black
			}
		}
	},

	plugins: [require('flowbite/plugin')]
};
