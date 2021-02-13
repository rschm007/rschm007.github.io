module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      pinkGlow: "0 35px 60px -15px rgba(248, 95, 255, 0.7)",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
