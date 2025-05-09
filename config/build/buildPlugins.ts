import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import path from 'path';
import Dotenv from 'dotenv-webpack';

import { BuildOptions } from './types/config';

export function buildPlugins({
  paths,
  isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    new HtmlWebpackPlugin({
      // шаблон нашей html-ки
      template: paths.html,
    }),
    // нужно для переноса картинок в dist - все картинки хранятся именно в папке images
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(paths.static, 'images'),
          to: path.resolve(paths.build, 'images'),
        },
        {
          from: path.resolve(paths.static, 'favicon.ico'),
          to: path.resolve(paths.build, 'favicon.ico'),
          noErrorOnMissing: true,
        },
      ],
    }),
    // добавляет функционал для использования .env файлв
    new Dotenv({
      path: paths.envFilePath,
    }),
    // в webpack v5+ убрали поддержку полифила: node-овского процесса process. Это полифил
    new webpack.ProvidePlugin({ process: 'process/browser' }),
    // показывает прогресс вовремя билда
    new webpack.ProgressPlugin(),
  ];

  if (isDev) {
    plugins.push(
      // Оба нужны для реалтайм обновления при изменении в коде,
      // чтобы webpack не перезагружал приложение, а подтягивал чисто изменивший код и изменил
      new webpack.HotModuleReplacementPlugin(),
      new ReactRefreshWebpackPlugin(),
    );
  }

  if (!isDev) {
    plugins.push(
      // извлекают css файлы в отдельные файлы
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      }),
    );
  }

  return plugins;
}
