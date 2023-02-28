import { IRouter } from '@routers/interface';
import React from 'react';

export const routerRegister: IRouter = {
  path: '/register',
  loader: React.lazy(() => import('./index')),
  exact: true,
};
