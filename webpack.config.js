const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const mode = 'production';
// const mode = 'development';
module.exports = {
    mode: mode,
    entry: {
        main: './src/main.ts',
        // components: './src/components.ts',
        // shared: 'lodash',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/',
        // library: 'freedom',
        libraryTarget: 'umd',
    },
    optimization: {
        minimize: false,
        // splitChunks: {
        //   chunks: 'all',
        // },
    },
    // optimization: {
    //     moduleIds: 'deterministic',
    //     runtimeChunk: 'single',
    //     splitChunks: {
    //         cacheGroups: {
    //           vendor: {
    //             test: /[\\/]node_modules[\\/]/,
    //             name: 'vendors',
    //             chunks: 'all',
    //           },
    //         },
    //       },
    //   },
    // devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new CopyPlugin({
            patterns: [
                { from: "assets", to: "assets" },
            ],
        }),
    ],
    module: {
        // loaders: [
        //     {
        //       test: /\.json$/,
        //       loader: 'json-loader'
        //     }
        //   ],
        rules: [
            {
                test: /\.json$/,
                loader: 'json-loader',
                type: 'javascript/auto',
            },
            {
                test: /\.(tsx|ts)?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },

        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        plugins: [new TsconfigPathsPlugin({/* options: see below */ })]
    },

    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
};