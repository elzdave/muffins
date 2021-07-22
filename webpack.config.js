const path = require("path");

module.exports = {
  resolve: {
    alias: {
      "@": path.resolve("resources/js"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(svelte)$/,
        use: {
          loader: "svelte-loader",
          options: {
            emitCss: true,
            hotReload: true,
          },
        },
      },
    ],
  },
};
