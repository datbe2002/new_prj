import { IRouter } from '@routers/interface';
import React from 'react';

export const routerAdd: IRouter = {
    path: '/add-device',
    loader: React.lazy(() => import('./AddNewDevice')),
    exact: true,
    masterLayout: false,
};
