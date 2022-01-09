import path from 'path';
import ESLintPlugin from 'eslint-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';
import StyleLintPlugin from 'stylelint-webpack-plugin';
import { HotModuleReplacementPlugin } from 'webpack';
// import { Configuration, HotModuleReplacementPlugin } from "webpack";
import {
  Configuration as WebpackDevServerConfiguration,
  WebpackConfiguration,
} from 'webpack-dev-server';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
  mode: 'development',
  output: {
    publicPath: '/',
  },
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
        // use: [
        //   'style-loader',
        //   {
        //     loader: 'css-loader',
        //     options: {
        //       importLoaders: 2,
        //       // 0 => no loaders (default);
        //       // 1 => postcss-loader;
        //       // 2 => postcss-loader, sass-loader
        //       modules: true,
        //     },
        //   },
        //   'postcss-loader',
        //   'sass-loader',
        // ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      scriptLoading: 'defer',
    }),
    new ScriptExtHtmlWebpackPlugin({
      preload: /\.js$/,
      // defaultAttribute: 'defer'
    }),
    new HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: false,
      eslint: {
        files: './src/**/*.{ts,tsx,js,jsx}',
      },
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
    new BundleAnalyzerPlugin({
      // analyzerMode: 'static',
      // reportFilename: path.join(__dirname, 'report.html'),
      openAnalyzer: false,
    }),
    new StyleLintPlugin({
      files: 'src/**/*.css',
      lintDirtyModulesOnly: true,
      fix: true,
    }),
  ],
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
    name: 'development',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    historyApiFallback: true,
    port: 4000,
    open: true,
    hot: true,
  },
};

export default config;
