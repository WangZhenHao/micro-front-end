const path = require('path');

function resolve(dir) {
	return path.join(__dirname, dir);
}

module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
          .set('@', resolve('./src'))
          .set('@views', resolve('./src/views'))
    },
    devServer: {
        hot: true,
        disableHostCheck: true,
        port: 7000,
        overlay: {
            warnings: false,    
            errors: true
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    }
}