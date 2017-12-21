const wpkcfg = require('./webpack.config.base'),
      webpack = require('webpack'),
      HtmlWebpackPlugin = require('html-webpack-plugin')

wpkcfg.devtool = '#source-map'

wpkcfg.plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'commons',
        filename: 'commons-[hash].min.js',
     }),
     new HtmlWebpackPlugin({
        title : 'Webpack Hot Reload Template',
        filename : 'main.html',
        inject : 'body',
        template: 'template.ejs',
        links: [{
            href : '/bootstrap/dist/css/bootstrap.css',
            rel : 'stylesheet'
        }],
        /**
        scripts: [
            'node_modules/vue/dist/vue.js',                
            'node_modules/jquery/dist/jquery.js'
        ]
        **/
    })
]

module.exports = wpkcfg