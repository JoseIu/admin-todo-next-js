import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blueDark: '#1C1D22',
        blueSemiDark: '#222327',
        blueLight: '#2A2B2F',
        todoGg: '#24262C',
        textWhite: '#FFFFFF',
        textGray: '#7F7F7F',
        backgroundFocus: '#24262C',
        todoDone: '#FF7979',
        btnColor: '#4B69FF',
      },
    },
  },
  plugins: [],
};
export default config;
