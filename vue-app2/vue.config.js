const { name } = require('./package');

module.exports = {
  lintOnSave: false,
  devServer: {
    port: 7200,
    overlay: {
      warnings: false,
      errors: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
        // 把子应用打包成 umd 库格式
        library: `${name}-[name]`,
        libraryTarget: 'umd',
        jsonpFunction: `webpackJsonp_${name}`,
    },
  }
};
