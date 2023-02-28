import React from 'react';

import { IRouter } from '@routers/interface';

export const routerHistory: IRouter = {
    path: '/history-profit',
    loader: React.lazy(() => import('./HistoryProfit')),
    exact: true,
    masterLayout: false,
};
