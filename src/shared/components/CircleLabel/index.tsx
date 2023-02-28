import React from 'react';

interface IProps {
  text: any;
  colorCode?: 'blue' | 'red' | 'grey' | 'green' | 'yellow' | 'purple';
  className?: string;
}
const CircleLabel = ({ text, colorCode = 'blue', className }: IProps) => {
  const color = {
    blue: 'circle-time-left',
    red: 'circle-cancel',
    grey: 'circle-expired',
    green: 'circle-new',
    yellow: 'circle-yellow',
    purple: 'circle-purple',
  };
  return (
    <div className={` circle-label ${className}`}>
      <span className={`circle-status ${color[colorCode]}`}></span>
      <span>{text}</span>
    </div>
  );
};

export default CircleLabel;
