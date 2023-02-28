import React from 'react';

import { IRouter } from '@routers/interface';

export const routerDetailHistoryR: IRouter = {
    path: '/report-detail/sync-history/:key',
    loader: React.lazy(() => import('./HistorySync')),
    exact: true,
    masterLayout: false,
};
