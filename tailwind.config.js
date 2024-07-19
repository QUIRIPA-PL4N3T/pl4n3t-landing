/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'body': ['League Spartan"', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': '#6022E8',
        'primary-dark': '#290884',
        'spring': '#4EFCE0',
        'wind': '#00C2A9',
        'three': '#008B75',
      },
    },
  },
  variants: {
    opacity: ({ after }) => after(['disabled'])
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

