import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const babelLoader = {
    test: /\.(js|ts)x?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [isDev && 'react-refresh/babel'].filter(Boolean),
      },
    },
  };

  const styleLoaderOptions = isDev
    ? 'style-loader'
    : MiniCssExtractPlugin.loader;

  const cssLoaders = {
    test: /\.css$/i,
    // очередность лоадеров очень важна
    use: [
      // Creates 'style' from JS strings
      styleLoaderOptions,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          // поддержка css module-ей
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
          },
        },
      },
      // expands our CSS files
      'postcss-loader',
    ],
  };

  // // less loader нужен для того, чтобы использовать less файлы, для более глубокой переписи стилей antd
  // const lessLoaders = {
  //   test: /\.less$/i,
  //   // очередность лоадеров очень важна
  //   use: [
  //     styleLoaderOptions, // Injects styles into DOM
  //     'css-loader', // Translates CSS into CommonJS
  //     {
  //       loader: 'less-loader', // Compiles Less to CSS
  //       options: {
  //         lessOptions: {
  //           javascriptEnabled: true,
  //           modifyVars: {
  //             // '@primary-color': '#3fa9d4', // Пример переписи antd primary color
  //             // '@border-radius-base': '8px',
  //           },
  //         },
  //       },
  //     },
  //   ],
  // };

  // import svg from './assets/file.svg?url' -- импортируем как файл
  const svgAsAssetLoader = {
    test: /\.svg$/i,
    type: 'asset',
    resourceQuery: /url/, // *.svg?url
  };

  // import Svg from './assets/file.svg' -- импортируем как готовый компонент
  const svgAsReactFcLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
    use: ['@svgr/webpack'],
  };

  const fileLoaders = {
    test: /\.(png|jpg?g|gif|woff2|woff)$/i,
    exclude: /node_modules/,
    use: ['file-loader'],
  };

  // Очередность лоадеров очень важна.
  // Как минимум если есть babel -> ts loader.
  // Поэтому при подключении нового, проверять
  return [
    babelLoader,
    // typescriptLoader,
    cssLoaders,
    // lessLoaders,
    svgAsAssetLoader,
    svgAsReactFcLoader,
    fileLoaders,
  ];
}
