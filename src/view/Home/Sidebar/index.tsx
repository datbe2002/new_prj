import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined, UserOutlined, PhoneOutlined, RightOutlined } from '@ant-design/icons';

import logo from '@assets/images/logo_vcpmc.png';

function getItem({
  label,
  key,
  icon,
  children,
  theme,
}: {
  label: string;
  key: string;
  icon?: any;
  children?: any;
  theme?: any;
}) {
  return {
    key,
    icon,
    children,
    label,
    theme,
  };
}

const items = [
  getItem({
    label: 'Kho bản ghi',
    key: 'kho-ban-ghi',
    icon: <HomeOutlined />,
    children: null,
  }),
  getItem({
    label: 'Playlist',
    key: 'playlist',
    icon: <UserOutlined />,
  }),
  getItem({
    label: 'Lập lịch phát',
    key: 'lap-lich-phat',
    icon: <PhoneOutlined />,
  }),
  getItem({
    label: 'Quản lý',
    key: 'quan-ly',
    icon: <PhoneOutlined />,
    children: [
      getItem({
        label: 'Quản lý hợp đồng',
        key: 'quan-ly/hop-dong',
      }),
      getItem({
        key: 'management',
        label: 'Quản lý thiết bị',
      }),
      getItem({
        key: 'quan-ly/don-vi-su-dung',
        label: 'Đơn vị sử dụng',
      }),
      getItem({
        key: 'quan-ly/don-vi-uy-quyen',
        label: 'Đơn vị ủy quyền',
      }),
    ],
  }),
  getItem({
    key: 'doanh-thu',
    label: 'Doanh thu',
    icon: <PhoneOutlined />,
    children: [
      getItem({
        label: 'Báo cáo doanh thu',
        key: 'report-profit',
      }),
      getItem({
        key: 'history-profit',
        label: 'Lịch sử đối soát',
      }),
      getItem({
        key: 'profit',
        label: 'Phân phối doanh thu',
      }),
    ],
  }),
  getItem({
    key: 'cai-dat',
    label: 'Cài đặt',
    icon: <PhoneOutlined />,
    children: [
      getItem({
        label: 'Phân quyền người dùng',
        key: 'cai-dat/phan-quyen-nguoi-dung',
      }),
      getItem({
        key: 'cai-dat/cau-hinh',
        label: 'Cấu hình',
      }),
      getItem({
        key: 'cai-dat/quan-ly-hop-dong',
        label: 'Quản lý hợp đồng',
      }),
      getItem({
        key: 'cai-dat/thong-tin-tac-pham',
        label: 'Thông tin tác phẩm',
      }),
      getItem({
        key: 'cai-dat/chu-ky-doi-soat',
        label: 'Chu kỳ đối soát',
      }),
    ],
  }),
  getItem({
    key: 'ho-tro',
    label: 'Hỗ trợ',
    icon: <PhoneOutlined />,
    children: [
      getItem({
        key: 'cai-dat/huong-dan-su-dung',
        label: 'Hướng dẫn sử dụng',
      }),
      getItem({
        key: 'cai-dat/tai-app',
        label: 'Tải app',
      }),
      getItem({
        key: 'cai-dat/feedback',
        label: 'Feedback',
      }),
    ],
  }),
];

function Sidebar() {
  const [active, setActive] = useState('kho-ban-ghi');

  const navigate = useNavigate();

  const onClick = (e: any) => {
    setActive(e.key);
    navigate('/' + e.key);
  };

  return (
    <div
      className="sidebar"
      style={{
        backgroundColor: '#020220',
        position: 'fixed',
        float: 'left',
        width: '170px',
        // justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '39px',
        height: '100vh',
      }}
    >
      <div className="logo">
        <img src={logo} alt="logo" width={96} height={96} />
      </div>
      <Menu
        onClick={onClick}
        selectedKeys={[active]}
        mode="vertical"
        theme="dark"
        items={items}
        style={{
          width: '100%',
          gap: '10px',
          paddingTop: '100px',
          backgroundColor: '#020220',
        }}
        expandIcon={<RightOutlined />}
      />
    </div>
  );
}

export default Sidebar;
