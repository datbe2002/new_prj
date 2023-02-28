import React from 'react';

import { IRouter } from '@routers/interface';

export const routerReportProfit: IRouter = {
    path: '/report-profit',
    loader: React.lazy(() => import('./ReportProfit')),
    exact: true,
    masterLayout: false,
};
