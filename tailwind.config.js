/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#4a154b',
        "main-blue": '#6645A8',
        "bg-gray":"#f4f4f5",
        "bg-black":"#121212",
        "text-gray":"#a0a096",
        "border-gray":"#e8e8e8",
        "accent-popular":"#7761ff",
        "main-light-blue":'#6298ff',
        "main-text-purple":'#ED924C'
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
