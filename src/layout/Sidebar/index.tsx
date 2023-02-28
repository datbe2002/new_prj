import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { UilAngleRight } from '@iconscout/react-unicons';
import { privatePage } from '@routers/mainRouter';
import { logo } from '@shared/assets/images';

import MenuCustom from './ItemMenu';

const SiderComponent: React.FC<{
  className: string;
  setClassName: (className: string) => void;
}> = props => {
  const location = useLocation();
  const navigate = useNavigate();
  const { className, setClassName } = props;
  const [width, setWidth] = useState<string | number>();
  const onClick = (e: any) => {
    setClassName('sider-component big');
    e.preventDefault();
    e.stopPropagation();
  };

  useEffect(() => {
    if (className === 'sider-component') {
      setWidth(0);
    } else {
      setWidth('100%');
    }
  }, [className]);

  return (
    <div className={className} onClick={onClick} onMouseEnter={onClick}>
      <div className="icon">
        <UilAngleRight />
      </div>
      <div className="mask" style={{ width }}>
        <div className="logo">
          <img src={logo} alt="logo" onClick={() => navigate('/')} />
        </div>
        <MenuCustom listNav={privatePage} location={location.pathname} />
      </div>
    </div>
  );
};

export default SiderComponent;
