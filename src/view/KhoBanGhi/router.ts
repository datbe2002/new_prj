import { IRouter } from '@routers/interface';
import React from 'react';

export const routerKhoBanGhi: IRouter = {
  path: '/kho-ban-ghi',
  loader: React.lazy(() => import('./index')),
  exact: true,
  masterLayout: false,
};
