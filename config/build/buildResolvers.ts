import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers({
  paths,
}: BuildOptions): webpack.ResolveOptions {
  return {
    // Места где ищет webpack, когда мы импортируем файлы через абсолютный путь. То что он воспринимает как модули
    modules: [paths.root, paths.src, 'node_modules'],
    // Список расширений файлов, которые будет искать webpack, если они не указаны при импорте файла
    extensions: ['.*', '.js', '.jsx', '.tsx', '.ts'],
    // Позволяет создавать ярлыки для папок или определенных модулей
    alias: paths.alias,
    fallback: {
      // в webpack v5+ убрали поддержку полифила: node-овского процесса process. Это полифил
      process: require.resolve('process/browser'),
    },
  };
}
