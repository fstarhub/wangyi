const path = require('path')
// __dirname: 内置代表当前文件的文件夹的绝对路径

/* 
根据目录/文件夹名得到其对应的绝对路径
*/
function resolve(dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  // 编写webpack配置
  configureWebpack: { 
    resolve: {
      extensions: ['.js', '.vue', '.json'], // 自添加的文件扩展名
      alias: { // 模块路径别名
        // 'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        'components': resolve('src/components'),
        'pages': resolve('src/pages'),
      }
    },
    devServer: {
      proxy: {
        // 请求地址以/api开头
        '/api': {
          target: 'http://m.you.163.com', // 转发的目录地址
          changeOrigin: true, // 支持跨域
           pathRewrite: { // 重写路径: 让代理服务在转发请求, 对路径进行特定修改
             '^/api': '', // 去掉路径中的/api
           }
        }
  }
}

  }}
// const px2remLoader = {
//   loader: 'px2rem-loader',
//   options: {
//   remUnit: 37.5  // remUnit为转换rem的基础 设计稿单位/等分数 = remUnit
//   }
// }

// // 在该函数的loaders中添加
// function generateLoaders (loader, loaderOptions) {
//   // 添加使用 px2remLoader
//   const loaders = options.usePostCSS ? [cssLoader, postcssLoader,px2remLoader] : [cssLoader, px2remLoader]

//   if (loader) {
//     loaders.push({
//       loader: loader + '-loader',
//       options: Object.assign({}, loaderOptions, {
//         sourceMap: options.sourceMap
//       })
//     })
//   }

//   // Extract CSS when that option is specified
//   // (which is the case during production build)
//   if (options.extract) {
//     return ExtractTextPlugin.extract({
//       use: loaders,
//       fallback: 'vue-style-loader'
//     })
//   } else {
//     return ['vue-style-loader'].concat(loaders)
//   }
// }