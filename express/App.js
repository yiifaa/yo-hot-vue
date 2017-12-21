const path = require('path'),
      ROOT = path.resolve(__dirname, '../'),
      configs = require('../config'),
      wbpcfg = require('../webpack.config.dev'),
      webpack = require('webpack'),
      compiler = webpack(wbpcfg),
      midware = require('webpack-dev-middleware'),
      hotware = require('webpack-hot-middleware'),      
      express = require('express'),
      app = express(),
      port = configs.server.port

//  自动编译
app.use(midware(compiler, {
      noInfo: true,
      headers : {
            'X-Custom-Header': 'yes'
      },
      //    是否修改文件后就立刻编译，否则请求时才会编译
      lazy : false,
      publicPath : 'http://127.0.0.1/dev'
}))
//  自动热加载
app.use(hotware(compiler, {
      log: false,
      //    此处要与client的path保持一致
      path: configs.server.path,
      heartbeat : 2000
}));


app.get('/', (req, rsp) => {
      rsp.sendFile(path.resolve(ROOT,'./index.html'))
})

app.listen(port, function () {
      console.log(`App Server start at ${port}!`)
})