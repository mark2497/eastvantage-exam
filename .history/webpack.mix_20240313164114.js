const mix = require('laravel-mix');

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

mix.js('resources/js/app.jsx', 'public/js')
    .react()
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);


module.exports = {
    entry: './index.jsx',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
            }
        }
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
    };
