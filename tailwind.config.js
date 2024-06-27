/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg_color': 'hsl(148, 38%, 91%)',
        'primary': 'hsl(169, 82%, 27%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
