import React from 'react';

import { IRouter } from '@routers/interface';

export const routerProfitDetail: IRouter = {
    path: '/profit-detail/:id',
    loader: React.lazy(() => import('./ProfitDetail')),
    exact: true,
    masterLayout: false,
};
