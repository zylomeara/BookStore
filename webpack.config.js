const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    entry: {
        app: [
            './src/index.tsx'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js',
        publicPath: '/'
    },
    mode: 'development',
    devtool: 'cheap-eval-source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.scss']
    },
    watchOptions: {
        poll: true
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true, //onlyCompileBundledFiles: true,
                        },
                    }
                ]
            },
            {
                test: /\.s([ac])ss$/,
                use: [
                    {
                        loader: 'style-loader', // creates style nodes from JS strings
                    },
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                    },
                    {
                        loader: 'sass-loader', // compiles SASS to CSS
                    },
                ],
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader', // creates style nodes from JS strings
                    },
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                    },
                    {
                        loader: 'less-loader', // compiles SASS to CSS
                        options: {
                            javascriptEnabled: true,
                            onlyCompileBundledFiles: true,
                        }
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader', // creates style nodes from JS strings
                    },
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                    },
                ],
            },
        ],
    },
    plugins: [
        new WebpackNotifierPlugin({
            title: 'webpack',
            alwaysNotify: true,
            // contentImage: abs('..', '..', 'assets', 'webpack.png'),
        }),
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        })
    ]
};