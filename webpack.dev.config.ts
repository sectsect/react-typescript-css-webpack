import path from 'path';
import dotenv from 'dotenv';
import fs from 'fs';
import ESLintPlugin from 'eslint-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import StyleLintPlugin from 'stylelint-webpack-plugin';
import webpack, { HotModuleReplacementPlugin } from 'webpack';
// import { Configuration, HotModuleReplacementPlugin } from "webpack";
import {
  Configuration as WebpackDevServerConfiguration,
  WebpackConfiguration,
} from 'webpack-dev-server';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

type Env = { [key: string]: string };

const webpackConfig = (env: Env) => {
  // https://trekinbami.medium.com/using-environment-variables-in-react-6b0a99d83cf5
  const currentPath = path.join(__dirname);
  const basePath = `${currentPath}/.env`;
  const envName = env.development ? 'development' : 'production';
  const envPath = `${basePath}.${envName}`;
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;
  const fileEnv = dotenv.config({ path: finalPath }).parsed;

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
          test: /\.svg$/,
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                svgoConfig: {
                  plugins: [
                    {
                      name: 'addClassesToSVGElement',
                      params: {
                        classNames: ['svg-icon-lib'],
                      },
                    },
                  ],
                },
              },
            },
            {
              loader: 'url-loader',
            },
          ],
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
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
      extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(fileEnv)
      }),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        inject: 'body',
        scriptLoading: 'defer',
      }),
      new HotModuleReplacementPlugin(),
      new ForkTsCheckerWebpackPlugin({
        async: false,
      }),
      new ESLintPlugin({
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        fix: true,
        emitError: true,
        lintDirtyModulesOnly: true,
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

  return config;
};

module.exports = (env: Env) => [
  webpackConfig(env)
];
