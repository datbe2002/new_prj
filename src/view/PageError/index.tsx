import './styles.scss';

import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router';
import { Img404 } from '@assets/images/index';
import { TokenSelector } from '@modules/authentication/profileStore';
import { useSelector } from 'react-redux';

const PageError = () => {
  const navigate = useNavigate();
  const token = useSelector(TokenSelector);

  return (
    <div className="page-error">
      <div className="intro-x ">
        <img alt="HTML Admin Template" className="img" src={Img404} />
      </div>
      <div className="wrapper__text">
        <div className="intro-x number">404</div>
        <div className="intro-x des-1">Oops. This page has gone missing.</div>
        <div className="intro-x des-2">
          You may have mistyped the address or the page may have moved.
        </div>
        <Button className="intro-x" onClick={() => navigate(token ? '/' : '/login')}>
          {`Back to ${token ? 'Home' : 'Login'}`}
        </Button>
      </div>
    </div>
  );
};

export default PageError;
