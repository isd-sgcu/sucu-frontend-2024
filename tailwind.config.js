/** @type {import('tailwindcss').Config} */
import { colorScheme } from './src/styles/tailwind/color';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: colorScheme,
    },
  },
  plugins: [],
}

