module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      //   gridTemplateColumns: {
      //     "full-bleed": "1fr min(60ch, calc(100% - 2rem)) 1fr",
      //   },
    },
  },
  plugins: [],
};
