/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1F6B34',
          50: '#E8F5EB',
          100: '#D1EBD7',
          200: '#A3D7AF',
          300: '#75C387',
          400: '#47AF5F',
          500: '#1F6B34',
          600: '#1B5C2D',
          700: '#174D26',
          800: '#133E1F',
          900: '#0F2F18',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}