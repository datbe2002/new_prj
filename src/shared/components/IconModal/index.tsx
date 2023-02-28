import { Tooltip } from 'antd';
import React from 'react';
import { useIntl } from 'react-intl';
import * as Icon from 'react-feather';
interface IProps {
  onClick?: () => void;
  disable?: boolean;
}
const EntryLogIconComponent = (props: IProps) => {
  const intl = useIntl();
  const onClick = e => {
    if (props?.onClick) {
      props?.onClick();
    }
    e.stopPropagation();
  };

  if (props?.disable) {
    return <></>;
  }
  return (
    <Tooltip title={intl.formatMessage({ id: 'common.LifeBuoy' })}>
      <Icon.LifeBuoy
        className={`icon-edit ${props?.disable ? 'icon-disable' : ''}`}
        size={19}
        onClick={onClick}
      />
    </Tooltip>
  );
};

export default EntryLogIconComponent;
