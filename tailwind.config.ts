import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      },
    },
    extend: {
      fontSize: {
        'dynmic-xs': ['clamp(0.5rem, 0.3793rem + 0.3861vw, 0.75rem)', 'clamp(1rem, 1rem + 0vw, 1rem)'],
        'dynmic-sm': ['clamp(0.625rem, 0.5043rem + 0.3861vw, 0.875rem)', 'clamp(1rem, 0.8793rem + 0.3861vw, 1.25rem)'],
        'dynmic-base': ['clamp(0.75rem, 0.6293rem + 0.3861vw, 1rem)', 'clamp(1rem, 0.7587rem + 0.7722vw, 1.5rem)'],
        'dynmic-lg': ['clamp(0.875rem, 0.7543rem + 0.3861vw, 1.125rem)', 'clamp(1.25rem, 1.0087rem + 0.7722vw, 1.75rem)'],
        'dynmic-xl': ['clamp(1rem, 0.8793rem + 0.3861vw, 1.25rem)', 'clamp(1.5rem, 1.3793rem + 0.3861vw, 1.75rem)'],
        'dynmic-2xl': ['clamp(1.125rem, 0.944rem + 0.5792vw, 1.5rem)', 'clamp(1.75rem, 1.6293rem + 0.3861vw, 2rem)'],
        'dynmic-3xl': ['clamp(1.25rem, 0.9484rem + 0.9653vw, 1.875rem)', 'clamp(1.75rem, 1.5087rem + 0.7722vw, 2.25rem)'],
        'dynmic-4xl': ['clamp(1.5rem, 1.138rem + 1.1583vw, 2.25rem)', 'clamp(2rem, 1.7587rem + 0.7722vw, 2.5rem)'],
        'dynmic-5xl': ['clamp(1.875rem, 1.332rem + 1.7375vw, 3rem)', 'clamp(2.25rem, 1.888rem + 1.1583vw, 3rem)'],
        'dynmic-6xl': ['clamp(2.25rem, 1.5261rem + 2.3166vw, 3.75rem)', 'clamp(2.5rem, 1.8967rem + 1.9305vw, 3.75rem)'],
        'dynmic-7xl': ['clamp(3rem, 2.2761rem + 2.3166vw, 4.5rem)', '1'],
        'dynmic-8xl': ['clamp(3.75rem, 2.6641rem + 3.4749vw, 6rem)', '1'],
        'dynmic-9xl': ['clamp(4.5rem, 2.8108rem + 5.4054vw, 8rem)', '1'],
      },
    },
  },
  plugins: [],
}
export default config

/*
Conditional:

npm install -D @tailwindcss/typography
plugins: [
    require('@tailwindcss/typography'),
  ],
*/
