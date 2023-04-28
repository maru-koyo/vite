module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-sort-media-queries": {},
    "css-declaration-sorter": { order: "smacss" },
    "@fullhuman/postcss-purgecss": {
      content: ["./src/**/*.html", "./src/js/**/*.js"],
      safelist: ["hoge"],
    },
  },
};
