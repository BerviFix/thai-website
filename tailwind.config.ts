import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/app.vue',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lexend', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        brand: ['Montserrat Alternates', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#536DFE',
          light: '#8C9EFF',
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['dark'],
    darkTheme: 'dark',
    base: true,
    styled: true,
    utils: true,
  },
} satisfies Config
