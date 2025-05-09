import React, { Suspense, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import dayjs from 'dayjs';
import isLeapYear from 'dayjs/plugin/isLeapYear';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'dayjs/locale/ru';
import 'dayjs/locale/en';
import 'dayjs/locale/kk';
import 'antd/dist/reset.css';
import { Spin } from 'antd';
import { LocaleProvider } from './LocaleContext';
import { TemplateProvider } from './TemplateContext';
import { AntdProvider } from './AntdContext';
import { routers } from './helpers/router/routers';

dayjs.extend(isLeapYear);

const router = createBrowserRouter(routers);

export const App: React.FC = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <LocaleProvider>
      <QueryClientProvider client={queryClient}>
        <AntdProvider>
          <Suspense fallback={<Spin size="large" />}>
            <TemplateProvider>
              <RouterProvider router={router} />
            </TemplateProvider>
          </Suspense>
        </AntdProvider>
      </QueryClientProvider>
    </LocaleProvider>
  );
};

export default App;
