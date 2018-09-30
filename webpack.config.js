const path = require('path')

module.exports = {
    mode: 'development',
    devtool: '#source-map',
    context: path.resolve(__dirname, 'src'),
    entry: {
        // path.resolve(__dirname, 'main.js'),
        // 'main': ['babel-polyfill', 'node-fetch', './main'],
        'main': ['./main'],
        'main2': ['@babel/polyfill', './main2'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
}

