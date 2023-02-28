import { IRouter } from '@routers/interface';
import React from 'react';

export const routerMainPublicPage: IRouter = {
  path: '/',
  loader: React.lazy(() => import('./Login/index')),
  exact: true,
};
