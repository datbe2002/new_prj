import { Tooltip } from 'antd';
import React from 'react';
import * as Icon from 'react-feather';

import { useAltaIntl } from '@shared/hook/useTranslate';

interface IProps {
  onClick?: () => void;
  disable?: boolean;
}
const DeleteIconComponent = (props: IProps) => {
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
    <Tooltip title={formatMessage('common.delete')}>
      <Icon.Trash
        className={`icon-edit ${props?.disable ? 'icon-disable' : ''}`}
        size={19}
        onClick={onClick}
      />
    </Tooltip>
  );
};

export default DeleteIconComponent;
