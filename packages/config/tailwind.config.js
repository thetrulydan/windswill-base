import { type Config } from 'tailwindcss';

export default {
  content: [
    './packages/ui/src/**/*.{js,ts,jsx,tsx}',
    './apps/demo/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;