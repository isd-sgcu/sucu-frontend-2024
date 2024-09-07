/** @type {import('tailwindcss').Config} */
import { colorScheme } from './src/styles/tailwind/color';
import { boxShadow } from './src/styles/tailwind/shadow';
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: colorScheme,
			boxShadow: boxShadow
		}
	},
	plugins: []
};
