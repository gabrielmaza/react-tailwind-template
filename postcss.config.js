module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss/nesting"),
    require("tailwindcss"),
    require("postcss-mixins"),
    require("postcss-variables"),
    require("postcss-use"),
    require("postcss-preset-env")({
      stage: 1,
    }),
    require("autoprefixer"),
  ],
};
