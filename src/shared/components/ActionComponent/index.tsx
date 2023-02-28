import React, { ReactNode } from 'react';
import './style.scss';

interface ActionProps {
  onClick: () => void;
  icon: ReactNode;
  name: string;
  color: 'blue' | 'red' | 'grey' | 'green';
}

const ActionComponent = (props: ActionProps) => {
  return (
    <div className={`wrapper_action ${props.color}`} onClick={props.onClick}>
      <div className="icon">{props.icon}</div>
      <div className="text">{props.name}</div>
    </div>
  );
};

export default ActionComponent;
