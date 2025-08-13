/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // I'm telling Copilot about my brand and status colors from Figma.
        primary: '#4A90E2',
        'status-applied': '#4A90E2',
        'status-interviewing': '#50E3C2',
        'status-offer': '#F5A623',
        'status-rejected': '#D0021B',
      },
      fontFamily: {
        // I'm telling Copilot to use the 'Inter' font.
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
