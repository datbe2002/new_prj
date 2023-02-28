import React from 'react';

import { IRouter } from '@routers/interface';

export const routerProfit: IRouter = {
    path: '/profit',
    loader: React.lazy(() => import('./Profit')),
    exact: true,
    masterLayout: false,
};
