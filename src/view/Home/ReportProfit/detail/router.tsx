import React from 'react';

import { IRouter } from '@routers/interface';

export const routerDetailR: IRouter = {
    path: '/report-detail/:key',
    loader: React.lazy(() => import('./profitDetail2')),
    exact: true,
    masterLayout: false,
};
