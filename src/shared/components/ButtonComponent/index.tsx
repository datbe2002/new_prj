import { Button } from 'antd';
import React, { ReactNode } from 'react';
import './style.scss';

interface ButtonProps {
  text: string;
  icon: ReactNode;
  onClick: () => void;
  mr_2?: boolean;
}

const ButtonComponent = (props: ButtonProps) => {
  return (
    <div className="wrapper_btn">
      <Button
        type="primary"
        icon={props.icon}
        size="large"
        onClick={props.onClick}
        className={props.mr_2 ? 'mr_2' : ''}
      >
        {props.text}
      </Button>
    </div>
  );
};

export default ButtonComponent;
