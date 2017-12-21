const path = require('path'),
    webpack = require('webpack'),
    dist = path.resolve(__dirname, './dist/'),
    src = path.resolve(__dirname, './src/')

module.exports = {

    entry : {
        main : ['./src/index.es6']    
    },

    externals : {
        vue : 'Vue'
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
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }, {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            }, {
                test: /\.vue$/,
                loader: 'vue-loader'
            }, {
                test: /\.(html|tpl)$/,
                loader: "html-loader"
            }
        ]
    }

}