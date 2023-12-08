/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        'primary': '#2c5168',
        'primary-border': '#1e3747',
        'secondary': '#82aeca'
      },
    }
  },
  plugins: []
};