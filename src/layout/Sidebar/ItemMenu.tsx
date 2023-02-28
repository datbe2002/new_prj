import { Menu, MenuProps } from 'antd';
import lodash from 'lodash';
import React, { useEffect, useMemo, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { CheckPermissionFunc } from '@hoc/CheckPermission';
import { RootState } from '@modules';
import { IRouter } from '@routers/interface';

interface IRenderMenuProps {
  listNav: Array<IRouter>;
  location: string;
}

const renderMenuItem = (data: IRouter, children?: MenuProps['items']) => {
  let path = data.path;
  if (data.menu?.generatePath) {
    path = data.menu.generatePath(undefined);
  } else if (data.generatePath) {
    path = data.generatePath(undefined);
  }
  return {
    key: data.menu?.activePath || data.activePath || data.path,
    label: (
      <Link to={path} className="item-label">
        <FormattedMessage id={data.name} defaultMessage={data.name} />
      </Link>
    ),
    icon: data.menu?.icon || data.icon,
    children: children,
  };
};

const MenuCustom: React.FC<IRenderMenuProps> = (props: IRenderMenuProps) => {
  const listNav = props.listNav.slice(1, props.listNav.length + 1);
  const { listPermissionCode } = useSelector((state: RootState) => state.profile);
  const [selectedKeys, setSelectedKeys] = useState<string[]>();
  const [openKeys, setOpenKeys] = useState<string[]>();

  const location = useLocation();

  const [items, setItems] = useState<any>([]);

  useEffect(() => {
    const newItem: any = [];
    listNav.forEach((item: IRouter) => {
      if (
        item.menu &&
        !item.menu?.hideInNavbar &&
        (!item.permissionCode ||
          (item.permissionCode && CheckPermissionFunc(item.permissionCode, listPermissionCode)))
      ) {
        if (item.routes && !lodash.isEmpty(item.routes)) {
          const children: any = [];
          item.routes.map((route: IRouter) => {
            if (
              !route.menu?.hideInNavbar &&
              (!route.permissionCode ||
                (route.permissionCode &&
                  CheckPermissionFunc(route.permissionCode, listPermissionCode)))
            ) {
              children.push(renderMenuItem(route));
            }
          });
          newItem.push(renderMenuItem(item, children));
        } else {
          newItem.push(renderMenuItem(item));
        }
      }
    });
    setItems(newItem);
  }, [ listPermissionCode]);

  useMemo(() => {
    items.forEach((item: any) => {
      if (item.children) {
        item.children.forEach((it: any) => {
          if (location.pathname.includes(it.key)) {
            setSelectedKeys([it.key]);
            setOpenKeys([item.key]);
          }
        });
      } else {
        if (location.pathname.includes(item.key)) {
          setSelectedKeys([item.key]);
        }
      }
    });
  }, [location.pathname, items]);

  return (
    <Menu
      defaultOpenKeys={openKeys}
      openKeys={openKeys}
      defaultSelectedKeys={selectedKeys}
      selectedKeys={selectedKeys}
      mode="inline"
      items={items}
    />
  );
};

export default MenuCustom;
