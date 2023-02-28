import React from 'react';
import { useAltaIntl } from '@shared/hook/useTranslate';
import { useNavigate } from 'react-router';
import ChangeLanguage from '@shared/components/ChangeLanguage';
import { logo_vcpmc } from '@assets/images';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const TokenErrorStatus = () => {
  const navigate = useNavigate();
  const { formatMessage } = useAltaIntl();
  return (
    <div className="reset-password">
      <div className="d-flex justify-content-end language">
        <ChangeLanguage />
      </div>

      <div className="flex-column d-flex gap-5">
        <div className="d-flex justify-content-center">
          <div className="logo">
            <img width={240} src={logo_vcpmc} alt="vcpmc" />
          </div>
        </div>
        <h1 className="reset-password-title text-center " style={{color:'red'}}>Không thể kết nối !!</h1>
        <div className="reset-password-status">
          <p>{formatMessage('reset.password.notification')}</p>
        </div>
        <div className="sent-link-button">
          <Button htmlType="submit">Yêu cầu gửi lại link</Button>
        </div>
        <div className="return-login-link">
          <Link to="/login">Quay lại đăng nhập</Link>
        </div>
      </div>
    </div>
  );
};

export default TokenErrorStatus;
