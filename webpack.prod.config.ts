import path from 'path';
import dotenv from 'dotenv';
import fs from 'fs';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import StyleLintPlugin from 'stylelint-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import webpack, { Configuration } from 'webpack';

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
    mode: 'production',
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'build'),
      // filename: "[name].[contenthash].js",
      filename: '[name].js',
      publicPath: '',
    },
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
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            name: 'commons',
            chunks: 'initial',
            minChunks: 2,
          },
        },
      },
      minimizer: [
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            compress: {
              drop_console: true,
            },
            output: {
              comments: false,
            },
          },
          extractComments: false,
        }),
        new CssMinimizerPlugin({
          minimizerOptions: {
            preset: [
              'default',
              {
                discardComments: {
                  removeAll: true,
                },
              },
            ],
          },
        }),
      ],
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
      new ForkTsCheckerWebpackPlugin({
        async: false,
      }),
      new ESLintPlugin({
        extensions: ['js', 'jsx', 'ts', 'tsx'],
      }),
      new CleanWebpackPlugin(),
      new StyleLintPlugin({
        files: 'src/**/*.css',
        lintDirtyModulesOnly: true,
        fix: true,
      }),
      new MiniCssExtractPlugin({
        // filename: "[name].[contenthash].css",
        filename: '[name].css',
      }),
    ],
    cache: {
      type: 'filesystem',
      buildDependencies: {
        config: [__filename],
      },
      name: 'production',
    },
    devtool: false,
  };

  return config;
};

module.exports = (env: Env) => [
  webpackConfig(env)
];

