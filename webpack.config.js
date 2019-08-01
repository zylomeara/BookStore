const path = require('path'),
    webpack = require('webpack');
    HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

function srcPath(subdir) {
    return path.join(__dirname, "src", subdir);
}

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
    // devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },
    watchOptions: {
        poll: true
    },
    devServer: {
        // contentBase: "./public",
        // hot: true
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
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader', // creates style nodes from JS strings
                    },
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                    },
                    {
                        loader: 'less-loader', // compiles Less to CSS
                        options: {
                            javascriptEnabled: true
                        }
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