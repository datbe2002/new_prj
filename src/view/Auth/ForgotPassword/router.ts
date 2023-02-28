import { IRouter } from '@routers/interface';
import React from 'react';

export const routerForgotPassword: IRouter = {
  path: '/forgot-password',
  loader: React.lazy(() => import('./index')),
  exact: true,
};
