import { Tooltip } from 'antd';
import React from 'react';
import { useAltaIntl } from '@shared/hook/useTranslate';
import * as Icon from 'react-feather';

interface IProps {
  onClick?: () => void;
  disable?: boolean;
}
const UpdateUserIcon = (props: IProps) => {
  const { formatMessage } = useAltaIntl();
  const onClick = (e: any) => {
    if (props?.onClick) {
      props?.onClick();
    }
    e.stopPropagation();
  };

  if (props?.disable) {
    return <></>;
  }
  return (
    <Tooltip title={formatMessage('common.update.user')}>
      <Icon.Edit3
        className={`icon-edit pointer ${props?.disable ? 'icon-disable' : ''}`}
        size={22}
        onClick={onClick}
      />
    </Tooltip>
  );
};

export default UpdateUserIcon;
