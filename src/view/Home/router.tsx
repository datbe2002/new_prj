import React from 'react';

import { HomeOutlined } from '@ant-design/icons';
import { IRouter } from '@routers/interface';

export const routerHome: IRouter = {
  path: '/',
  loader: React.lazy(() => import('./index')),
  exact: true,
  name: 'home.name', //translate here for breadcrumb and sidebar
  masterLayout: true,
  menu: {
    icon: <HomeOutlined />,
  },
};
