import { MoreOutlined } from '@ant-design/icons';
import { Button, Dropdown } from 'antd';
import React, { ReactNode } from 'react';
import './style.scss';

export interface IItem {
  label: string;
  key: string | number;
  icon: ReactNode;
}

interface ButtonDropdownProps {
  items: Array<IItem>;
  handleMenuClick: (e: any) => void;
}

const ButtonDropdown = (props: ButtonDropdownProps) => {
  const menuProps = {
    items: props.items,
    onClick: props.handleMenuClick,
  };
  return (
    <div className="wrapper_btn_dropdown">
      <Dropdown
        menu={menuProps}
        trigger={['click']}
        overlayClassName="dropdown_btn"
      >
        <Button onClick={e => e.preventDefault()}>
          <MoreOutlined />
        </Button>
      </Dropdown>
    </div>
  );
};

export default ButtonDropdown;

//Data example
// const items: MenuProps['items'] = [
//   {
//     label: ' menu item',
//     key: '1',
//     icon: <UserOutlined />,
//   },
//   {
//     label: 'menu item',
//     key: '2',
//     icon: <UserOutlined />,
//   },
//   {
//     label: 'menu item',
//     key: '3',
//     icon: <UserOutlined />,
//   },
// ];

//handleMenuClick example
// const handleMenuClick: MenuProps['onClick'] = e => {
//   const findKey = items.find(it => it?.key === e.key);
//   if (findKey) {
//     //navigate to new router
//   }
// };
