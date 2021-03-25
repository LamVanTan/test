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

// mix.js('resources/assets/admin/js/jquery2.0.3.min.js', 'public/admin/js')
//     .sass('resources/sass/app.scss', 'public/css');



//file node_modules
mix.copy('node_modules/@babel/parser/lib/index.js', 'public/admin/js/raphael-min.js');
mix.copy('node_modules/highcharts/highcharts.js', 'public/admin/js/highcharts.js');
mix.copy('node_modules/font-awesome/css/font-awesome.css', 'public/admin/css');


//Admin
mix.copyDirectory('resources/assets/admin/images', 'public/admin/images');
mix.copyDirectory('resources/assets/admin/fonts', 'public/admin/fonts');

mix.js('resources/assets/admin/customs/js/custom.js', 'public/admin/js');


mix.styles([
  'node_modules/bootstrap/dist/css/bootstrap.min.css',
  'resources/assets/admin/css/style-responsive.css',
  'resources/assets/admin/css/style.css',
  'resources/assets/admin/css/font.css',
  'resources/assets/admin/css/morris.css',
  'resources/assets/admin/css/monthly.css',
], 'public/admin/css/all.css');

mix.js([
    'resources/assets/admin/js/jquery2.0.3.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'resources/assets/admin/js/morris.js',
    'resources/assets/admin/js/monthly.js',
    'resources/assets/admin/js/jquery.dcjqaccordion.2.7.js',
    'resources/assets/admin/js/scripts.js',
    'resources/assets/admin/js/jquery.slimscroll.js',
    'resources/assets/admin/js/jquery.nicescroll.js',
    'resources/assets/admin/js/jquery.scrollTo.js',
], 'public/admin/js/app.js');


