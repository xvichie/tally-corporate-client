/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#4a154b',
        "main-blue": '#6645A8',
        "main-cream": "#E0D0BE",
        "main-orange": "#ED924C",
        "main-white": "#F0EFEF",
        "main-green": "#23732F",
        "bg-gray":"#f4f4f5",
        "bg-black":"#1d232a",
        "text-gray":"#a0a096",
        "border-gray":"#e8e8e8",
        "accent-popular":"#7761ff",
        "main-light-blue":'#6298ff',
        "main-text-purple":'#391c75'
      },
      fontFamily: {
        mrgvlovani: ["Mrgvlovani", "sans-serif"],
      },
      wrapper: {
        width: {
          DEFAULT: "85vw",
        },
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 35s linear infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};
