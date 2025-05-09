import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'dist'),
    root: path.resolve(__dirname),
    src: path.resolve(__dirname, 'src'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    static: path.join(__dirname, 'public'),
    envFilePath: path.resolve(__dirname, '.env'),
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@orval': path.resolve(__dirname, 'src/hooks/generated/'),
    },
  };

  const port = env.port || 3001;
  const mode = env.mode || 'development';

  const isDev = mode === 'development';

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    port,
    paths,
    isDev,
  });

  return config;
};
