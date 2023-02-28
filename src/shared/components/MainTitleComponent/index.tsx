import React, { memo } from 'react';

import { IRouter } from '@routers/interface';

import BreadcrumbComponent from './BreadcumbComponent';
import TitleComponent from './TitleComponent/index';

export interface IBreadcrumbs {
  name: string;
  href?: string;
}
interface Props {
  classTitle?: string;
  classBreadcrumbs?: string;
  title?: any;
  breadcrumbs?: IRouter | Array<IRouter>;
}

const MainTitleComponent = ({
  classTitle = '',
  classBreadcrumbs = '',
  title = '',
  breadcrumbs,
}: Props) => {
  let titleIn = '';
  if (title) {
    titleIn = title;
  } else {
    if (Array.isArray(breadcrumbs)) {
      const index = breadcrumbs.length - 1;
      titleIn = breadcrumbs[index]?.name || '';
    } else {
      titleIn = breadcrumbs?.name || '';
    }
  }
  return (
    <div className="main-title-breadcrumb__box -intro-x">
      {breadcrumbs ? (
        <BreadcrumbComponent breadcrumbs={breadcrumbs} className={classBreadcrumbs} />
      ) : (
        ''
      )}
      <TitleComponent title={titleIn} className={classTitle} />
    </div>
  );
};

export default memo(MainTitleComponent);
