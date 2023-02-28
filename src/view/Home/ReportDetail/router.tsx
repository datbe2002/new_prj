import React from 'react';

import { IRouter } from '@routers/interface';

export const routerReportDetail: IRouter = {
    path: '/report-detail',
    loader: React.lazy(() => import('./ReportDetail')),
    exact: true,
    masterLayout: false,
};
