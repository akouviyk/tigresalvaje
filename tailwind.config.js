/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-marine': '#24582a',
        'sandstone': '#fffaf1',
        'coastal-sage': '#d4e8cf',
        'driftwood': '#24582a',
        'hatchling-olive': '#d4e8cf',
        'sunset-coral': '#c9e631',
        // Theme colors
        'bg-primary': '#fffaf1',
        'bg-secondary': '#d4e8cf',
        'text-primary': '#24582a',
        'button-bg': '#24582a',
        'button-text': '#c9e631',
        'text-muted': '#666666',
      },
      fontFamily: {
        'serif': ['Avenir', 'Avenir Next', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        'sans': ['Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
