const mix = require('laravel-mix');

require('mix-env-file');

mix.env(
   process.env.ENV_FILE
);



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

mix.webpackConfig({
   devtool: 'source-map'
});

/*mix.webpackConfig({
   resolve: {
       extensions: [ '.vue', '.ts', '.js' ],
   },
   module: {
       rules: [
           {
               test: /\.ts$/,
               loader: 'ts-loader',
               exclude: /node_module/,
               options: { appendTsSuffixTo: [/\.vue$/] }
           },
       ],
   },
});*/

mix.js('resources/js/app.js', 'public/js')
/*mix.ts('resources/js/app.ts', 'public/js')*/
    .postCss('resources/css/app.css', 'public/css')
    .sass('resources/sass/app.scss', 'public/css')    
    .copy(
      'node_modules/@fortawesome/fontawesome-free/webfonts',
      'public/webfonts')
    .vue()
    .alias({'@': 'resources/js/'})
    .options({
      postCss: [
          require('postcss-import'),
          require('tailwindcss'),
      ]
  });

  

