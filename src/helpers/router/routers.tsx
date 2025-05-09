import { RouteObject } from 'react-router-dom';
import HomePage from '../../pages/HomePage';

export enum AppRoutes {
  MAIN = 'main',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
};

const routerConfig: Record<AppRoutes, RouteObject> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <HomePage />,
  },
};

export const routers: RouteObject[] = Object.values(routerConfig);
