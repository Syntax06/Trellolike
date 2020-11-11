const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.js('resources/js/app.js', 'public/js')
   .js('resources/js/js.js', 'public/js')
   .js('resources/js/impress.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .sass('resources/sass/welcome.scss', 'public/css')
   .sass('resources/sass/impress.scss', 'public/css')
   .sass('resources/sass/impress-common.scss', 'public/css')
   .sass('resources/sass/error404final.scss', 'public/css');



