import { IRouter } from '@routers/interface';
import React from 'react';

export const routerResetPassword: IRouter = {
  path: '/reset-password/:token',
  // path: '/reset-password',
  loader: React.lazy(() => import('./index')),
  exact: true,
};
