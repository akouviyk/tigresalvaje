/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-marine': '#0a2c3a',
        'sandstone': '#f3efe5',
        'coastal-sage': '#7a8f86',
        'driftwood': '#7d5a4c',
        'hatchling-olive': '#a3b18a',
        'sunset-coral': '#d78c6c',
      },
      fontFamily: {
        'serif': ['DM Serif Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
