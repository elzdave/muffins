const mix = require("laravel-mix");
const postCssImport = require("postcss-import");
const tailwindCss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
// require("laravel-mix-svelte");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.postCss("resources/css/app.css", "public/css", [
  postCssImport,
  tailwindCss,
  autoprefixer,
]);

mix.js("resources/js/react/app.jsx", "public/js/react").react();

// mix.js("resources/js/svelte/app.js", "public/js/svelte").svelte();

mix.js("resources/js/vue/app.js", "public/js/vue").vue();

if (mix.inProduction()) {
  mix.version();
}
