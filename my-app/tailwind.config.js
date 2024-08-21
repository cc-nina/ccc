/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  safelist: [
    "poppins text-4xl sm:text-5xl font-semibold md:text-6xl text-[#EF5D60]",
    "poppins text-4xl sm:text-5xl font-semibold md:text-6xl text-[#EC4067]",
    "poppins text-4xl sm:text-5xl font-semibold md:text-6xl text-[#A01A7D]"
  ],
  theme: {
    extend: {}
  },
  plugins: []
};

