import React from 'react';

import { IRouter } from '@routers/interface';

export const routerManagement: IRouter = {
    path: '/management',
    loader: React.lazy(() => import('./Management')),
    exact: true,
    masterLayout: false,
};
