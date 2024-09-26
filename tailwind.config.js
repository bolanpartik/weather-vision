/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customDark: '#050520',
      },
      backgroundImage: {
        darkGradient: 'linear-gradient(135deg, rgb(0, 0, 0), rgb(9, 9, 83), rgb(0, 0, 0), rgb(0, 0, 15), rgb(9, 9, 83), rgb(0, 0, 0), rgb(0, 0, 0))',
        bgButton    : 'linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)'
      },
      backgroundSize:{
        buttonSize : '200%,100%',
      },
      animation: {
        shimmer: "shimmer 3s linear infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
