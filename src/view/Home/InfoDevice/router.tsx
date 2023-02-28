import { IRouter } from '@routers/interface';
import React from 'react';

export const routerInfo: IRouter = {
    path: '/info-device/:key',
    loader: React.lazy(() => import('./InfoDevice')),
    exact: true,
    masterLayout: false,
};
