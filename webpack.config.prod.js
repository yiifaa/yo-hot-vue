const wpkcfg = require('./webpack.config.base'),
      webpack = require('webpack'),
      HtmlWebpackPlugin = require('html-webpack-plugin')

wpkcfg.devtool = '#source-map'

wpkcfg.externals = {
    vue : 'Vue'
}

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
            href : 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
            rel : 'stylesheet',
            integrity : "sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u",
            crossorigin : "anonymous"
        }],
        /****/
        scripts: [
            'https://cdn.jsdelivr.net/npm/vue'
        ]
        
    })
]

module.exports = wpkcfg