import { IRouter } from '@routers/interface';
import React from 'react';

export const routerLogin: IRouter = {
  path: '/login',
  loader: React.lazy(() => import('./index')),
  exact: true,
  masterLayout: false,
};
