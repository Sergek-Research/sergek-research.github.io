import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { buildLoaders } from './buildLoaders';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(
  options: BuildOptions,
): webpack.Configuration {
  const { mode, paths, isDev } = options;

  return {
    entry: paths.entry,
    mode,
    output: {
      // hash меняется в зависимости от измененного контента в файлах и только при изменении/ в обратном кешируется
      filename: 'bundle.[contenthash].js',
      path: paths.build,
      // когда мы делаем historyApiFallback: true и используем роутинг, переходя через адресную строку у нас 404 ошибки
      // и он ищет в бандле index.html для показа 404 и для этого нужно указать publicPath
      // This option specifies the public URL of the output directory when referenced in a browser. (Source: Webpack; https://webpack.js.org/configuration/output/#outputpublicpath)
      // https://stackoverflow.com/a/78928615
      publicPath: '/',
      // очищает старые бандлы
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    // debugging - карты исходного кода, для выявления ошибки в коде по стэктрейсу, в каком файле, в какой функции
    devtool: isDev ? 'inline-source-map' : false,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
