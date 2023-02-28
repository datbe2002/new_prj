import { IRouter } from '@routers/interface';
import React from 'react';

export const routerPlaylist: IRouter = {
  path: '/playlist',
  loader: React.lazy(() => import('./index')),
  exact: true,
  masterLayout: false,
};
