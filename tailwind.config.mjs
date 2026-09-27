/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D8B569',
          light: '#DEC99C',
        },
        ink: {
          DEFAULT: '#000000',
          gray: '#555555',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F2F2F2',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 0 24px rgba(31, 51, 108, 0.14)',
      },
      container: {
        center: true,
        maxWidth: {
          DEFAULT: '100%',
          sm: '720px',
          md: '960px',
          lg: '1200px',
          xl: '1440px',
          '2xl': '1680px',
        },
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '3rem',
          xl: '4rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
};
