import React from 'react';

import { IRouter } from '@routers/interface';

export const routerHistoryProfitDetail: IRouter = {
    path: '/history-profit-detail/:key',
    loader: React.lazy(() => import('./HistoryProfitDetail')),
    exact: true,
    masterLayout: false,
};
