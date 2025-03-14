/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'fhd': '1920px',  // FHD 기준 (1920px 이상)
        'qhd': '2560px',  // QHD 기준 (2560px 이상)
      },
    },
  },
  plugins: [],
}
