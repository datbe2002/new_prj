import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Icon from 'react-feather';

import { RootState } from '@modules';
import UserEntity from '@modules/user/entity';
import { Selector } from '@reduxjs/toolkit';
import { imgAvatar } from '@shared/assets/images';
import ChangeLanguage from '@shared/components/ChangeLanguage';
import { Badge, Dropdown, MenuProps } from 'antd';
import { useAltaIntl } from '@shared/hook/useTranslate';
import { KeyOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { DeleteConfirm } from '@shared/components/ConfirmDelete';
import store from '@core/store/redux';
import { removeProfile } from '@modules/authentication/profileStore';

interface IHeaderComponent {
  profile?: UserEntity;
}

const HeaderComponentSelector: Selector<RootState, IHeaderComponent> = (
  state: RootState,
) => {
  return {
    profile: state.profile.user,
  };
};

const HeaderComponent = () => {
  const { profile } = useSelector(HeaderComponentSelector);
  const navigate = useNavigate();
  const { formatMessage } = useAltaIntl();

  const items: MenuProps['items'] = [
    {
      key: 'no',
      label: (
        <div className="wrapper__label">
          <div className="header-component__identify">
            <h4 className="identify__admin">{profile?.userName}</h4>
            <p className="identify__hi">
              {(profile && profile?.role?.roleName) || 'Unknown'}
            </p>
          </div>
        </div>
      ),
    },
    {
      type: 'divider',
    },
    {
      key: '0',
      label: (
        <div className="wrapper__labelIcon">
          <UserOutlined />
          <span className="menu-label">{formatMessage('common.profile')}</span>
        </div>
      ),
    },
    // {
    //   key: '1',
    //   label: (
    //     <div className="wrapper__labelIcon">
    //       <KeyOutlined />
    //       <span className="menu-label">
    //         {formatMessage('common.forgotPassword')}
    //       </span>
    //     </div>
    //   ),
    // },
    {
      type: 'divider',
    },
    {
      key: '2',
      label: (
        <div className="wrapper__labelIcon">
          <LogoutOutlined />
          <span className="menu-label">{formatMessage('common.logout')}</span>
        </div>
      ),
    },
  ];

  const onMenuSelect = ({ key }: any) => {
    switch (key) {
      case '0':
        navigate('/profile');
        break;
      case '1':
        break;
      case '2':
        DeleteConfirm({
          title: formatMessage('common.logout.title'),
          content: formatMessage('common.logout.content'),
          handleOk: () => {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            store.dispatch(removeProfile()), navigate('/login');
          },
        });
        break;
      default:
        return;
    }
  };

  return (
    <>
      <div className="header-component item-hover__icon intro-x">
        <ChangeLanguage />
        <div className="notification-badge">
          <Badge count={9} overflowCount={10}>
            <Icon.Bell />
          </Badge>
        </div>
        <Dropdown
          placement="bottomRight"
          trigger={['click']}
          menu={{
            items,
            onClick: onMenuSelect,
          }}
          overlayClassName={'header-component__dropdown-menu'}
        >
          <div className="dropdown__profile__img">
            <img
              alt="img-avatar"
              className="img-avatar"
              src={profile?.avatar || imgAvatar}
            />
          </div>
        </Dropdown>
      </div>
    </>
  );
};

export default memo(HeaderComponent);
