var path = require('path');
var webpack = require('webpack');

const production = process.argv.some(r => r === "-p");

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        'babel-polyfill',
        'whatwg-fetch',
        './src/index.jsx'
    ],
    output: {
        path: path.join(__dirname, production ? 'dist' : 'build'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    devtool: production ? '' : 'source-map',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.jsx', '.js'],
        root: [
            path.resolve('./src'),
        ],
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loaders: ['react-hot', 'babel'],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            }
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
         new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': production ? JSON.stringify('production') : JSON.stringify('development')
            }
        })
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
  }
};