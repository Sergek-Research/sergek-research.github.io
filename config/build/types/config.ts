export type BuildMode = 'production' | 'development';

export interface Alias {
  [key: string]: string;
}

export interface BuildPaths {
  entry: string;
  build: string;
  src: string;
  root: string;
  html: string;
  static: string;
  alias: Alias;
  envFilePath: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}
export interface BuildEnv {
  mode: BuildMode;
  port: number;
}
