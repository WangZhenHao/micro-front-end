module.exports = {
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