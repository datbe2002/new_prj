// import "./Login.css";
import '../styles.scss';
import './styles.scss';
import React, { useState } from 'react';
import { logo_vcpmc } from '@assets/images';
import ChangeLanguage from '@shared/components/ChangeLanguage';
import { Link } from 'react-router-dom';
import { Input, Form, Button, Checkbox } from 'antd';
import { useNavigate } from 'react-router';
import RenderError from '../components/RenderError';

const ForgotPassword = () => {
  const [checkSuccessEmail, setCheckSuccessEmail] = useState<boolean>(false);
  const navigate = useNavigate();
  const [errorStatus, setErrorStatus] = useState('');
  const [email, setEmail] = useState('');
  const onChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const onFinishFailed = () => {
    setErrorStatus('');
  };
  const onSubmitEmail = (values: any) => {
    if (email !== 'a@gmail.com') {
      setErrorStatus('Email không tồn tại');
      return;
    } else {
      setCheckSuccessEmail(true);
    }
  };

  return (
    <div className="forgot-password">
      <div className="d-flex justify-content-end language">
        <ChangeLanguage />
      </div>

      <div className="flex-column d-flex gap-3">
        <div className="d-flex justify-content-center">
          <div className="logo">
            <img width={240} src={logo_vcpmc} alt="vcpmc" />
          </div>
        </div>
        <h1 className="forgot-password-title text-center">Khôi phục mật khẩu</h1>
        {!checkSuccessEmail ? (
          <>
            <p className="forgot-password-description">
              Vui lòng nhập địa chỉ email đã đăng ký để yêu cầu khôi phục mật khẩu
            </p>
            <div className="forgot-password-email-form">
              <Form
                name="forgotPassword"
                layout="vertical"
                onFinish={onSubmitEmail}
                onFinishFailed={onFinishFailed}
                requiredMark={false}
              >
                <label htmlFor="Email">Email</label>
                <Form.Item
                  name="Email"
                  rules={[
                    {
                      required: true,
                    },
                    {
                      type: 'email',
                    },
                  ]}
                >
                  <Input placeholder="david@gmail.com" onChange={onChangeEmail} />
                </Form.Item>
                {errorStatus && <RenderError errorStatus={errorStatus} />}
                <div className="normal-button">
                  <Button htmlType="submit">Xác nhận</Button>
                </div>
              </Form>
            </div>
          </>
        ) : (
          <div className="forgot-password-status">
            <p>
              Link khôi phục mật khẩu đã được gửi vào email của bạn. Vui lòng kiểm tra mail.
              <br /> 
              Click vào đường link được đính kèm trong email để chuyển đến trang đặt lại mật khẩu.
            </p>
          </div>
        )}
        <div className="return-login-link">
          <Link to="/login">Quay lại đăng nhập</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
