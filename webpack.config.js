const path = require('path')
const webpack = require('webpack')
const BundleTracker = require('webpack-bundle-tracker')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './src/main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new BundleTracker({
      path: __dirname,
      filename: '.webpack-stats.json',
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /.(png|jpg|svg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      //   {
      //     test: /\.module\.s(a|c)ss$/,
      //     loader: [
      //       isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
      //       {
      //         loader: 'css-loader',
      //         options: {
      //           modules: true,
      //           sourceMap: isDevelopment,
      //         },
      //       },
      //       {
      //         loader: 'sass-loader',
      //         options: {
      //           sourceMap: isDevelopment,
      //         },
      //       },
      //     ],
      //   },

      //   {
      //     test: /\.s(a|c)ss$/,
      //     exclude: /\.module.(s(a|c)ss)$/,
      //     loader: [
      //       isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
      //       'css-loader',
      //       {
      //         loader: 'sass-loader',
      //         options: {
      //           sourceMap: isDevelopment,
      //         },
      //       },
      //     ],
      //   },

      //   {
      //     test: /\.css$/,
      //     use: ['style-loader', 'css-loader'],
      //   },
    ],
  },

  resolve: {
    extensions: ['.js', '.vue', '.json', '.scss'],
    alias: { vue: 'vue/dist/vue.js' },
  },

  optimization: {
    // ...
    // Automatically split vendor and commons
    // ...
    splitChunks: {
      chunks: 'async', // from 'all'
      name: true, // from 'false'
    },

    // ...

    runtimeChunk: false, //from 'true'
  },
}
