import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer({
  port,
  paths,
}: BuildOptions): DevServerConfiguration {
  return {
    port,
    open: true,
    static: {
      directory: paths.static,
    },
    hot: true,
    historyApiFallback: true,
  };
}
