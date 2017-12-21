const path = require('path'),
    webpack = require('webpack'),
    configs = require('./config')
    dist = path.resolve(__dirname, './dist/'),
    src = path.resolve(__dirname, './src/'),    
    hotUrl = `webpack-hot-middleware/client?path=${configs.server.path}&timeout=10000&reload=true`

module.exports = {

    entry : {
        main : ['./src/index.es6', hotUrl]    
    },

    output : {
        path : dist,
        filename : '[name].bundle.js',
        libraryTarget : 'var'
    },

    module: {
        loaders: [
            /* ES6编译 */
            {
                test: /\.es6$/,
                loader: 'babel-loader',
                include: src,
                query : {
                    babelrc : true    
                }
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]

}