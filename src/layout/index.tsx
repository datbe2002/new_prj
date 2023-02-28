import React, { memo, PropsWithChildren, useState } from 'react';

import Loading from '@shared/components/Loading';

import HeaderComponent from './Header';
import SiderComponent from './Sidebar';

interface IDefaultLayoutProps {
  history?: any;
  hideSideBar?: boolean;
  hideHeader?: boolean;
  loading?: boolean;
}

const DefaultLayout: React.FC<PropsWithChildren<IDefaultLayoutProps>> = props => {
  const [menu, setMenu] = useState<string>('sider-component big');

  const onClick = (e: any): any => {
    const targetNode = e.target as HTMLDivElement;
    if (targetNode.className === 'main-component' || e.target === e.currentTarget) {
      setMenu('sider-component');
      return;
    }
    if (
      targetNode.tagName === 'INPUT' ||
      targetNode.tagName === 'BUTTON' ||
      targetNode.parentElement?.onclick !== null
    ) {
      return;
    }
    setMenu('sider-component');
  };

  return (
    <div className="all-page-component">
      {props.hideSideBar !== true && <SiderComponent setClassName={setMenu} className={menu} />}
      <div className="right-page-component" onClick={onClick}>
        {props.hideHeader !== true && (
          <div className="w-100 d-flex flex-row-reverse">
            <HeaderComponent />
          </div>
        )}
        <div className={props.hideSideBar === true ? '' : 'main-component'}>{props.children}</div>
        {props.loading && (
          <div className="w-100 h-100 div-mask">
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(DefaultLayout);
