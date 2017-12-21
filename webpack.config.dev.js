const configs = require('./config'),
      hotUrl = `webpack-hot-middleware/client?path=${configs.server.path}&timeout=10000&reload=true`,
      webpack = require('webpack'),
      wpkcfg = require('./webpack.config.base')

//  添加热加载地址
for(let key in wpkcfg.entry) {
    wpkcfg.entry[key].push(hotUrl);
}

wpkcfg.plugins =  [
    new webpack.HotModuleReplacementPlugin()
]

module.exports = wpkcfg