import React from 'react';
import { IRouter } from '@routers/interface';

export const routerPageError: IRouter = {
  path: '*',
  masterLayout: false,
  loader: React.lazy(() => import('./index')),
};
