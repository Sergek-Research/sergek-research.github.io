/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
