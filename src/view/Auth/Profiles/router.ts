import React from 'react';

import { IRouter } from '@routers/interface';

export const routerViewProfile: IRouter = {
  path: '/profile',
  name: 'profile.name',
  loader: React.lazy(() => import('./index')),
  exact: true,
  masterLayout: true,
};
