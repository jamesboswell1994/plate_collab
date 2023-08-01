const webpack = require('webpack');
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    devServer : {
            open: 'http://localhost:8080',
            static : {
                directory : path.join(__dirname)
            },
            compress: true,
            port : 8080,
            proxy : {
                '/' : 'http://localhost:3000'
            }
    },
    entry : [
        '/client/index.js'
    ],

    output: {
        path : path.resolve(__dirname, 'build'),
        publicPath : '/',
        filename : 'bundle.js',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                // use: {
                // },
                use: [
                    {loader : 'babel-loader',
                    options: {
                        presets:[
                    '@babel/preset-env',
                    '@babel/preset-react']
                    }
                }
                ]
            },
            {
                test: /.(css|scss)$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: ['style-loader', 'css-loader', 'sass-loader']
            }   
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
           "React": "react",
        }),
     ],

}