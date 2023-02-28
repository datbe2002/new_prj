import '../styles.scss';

import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import { ImgLogin, logo } from '@assets/images';
import { useSingleAsync } from '@hook/useAsync';
import { useAltaIntl } from '@hook/useTranslate';
import authenticationPresenter from '@modules/authentication/presenter';

import RenderError from '../components/RenderError';

const Login = () => {
  const navigate = useNavigate();
  const { formatMessage } = useAltaIntl();
  const { login } = authenticationPresenter;
  const loginByAccount = useSingleAsync(login);
  const [errorStatus, setErrorStatus] = useState('');
  const onFinishFailed = () => {
    setErrorStatus('');
  };
  const onSubmitAccount = (values: any) => {
    delete values.remember;
    document.cookie = `remember_me=${true}; SameSite=None; Secure`;
    loginByAccount
      ?.execute(values)
      ?.then(() => {
        setErrorStatus('');
        setTimeout(() => {
          navigate('/');
        }, 300);
      })
      .catch(() => {
        setErrorStatus(formatMessage('login.account.error'));
      });
  };

  return (
    <>
      <div className="main-form auth-form">
        <div className="wrapper_logo">
          <div className="wrap_logo">
            <img src={logo} className="logo" />
            <span>Ravolution</span>
          </div>
          <img src={ImgLogin} alt="" className="content_logo" />
        </div>
        <div className="content-form">
          <h3 className="main-title">{formatMessage('login.title')}</h3>
          <Form
            name="loginByAccount"
            layout="vertical"
            onFinish={onSubmitAccount}
            onFinishFailed={onFinishFailed}
            requiredMark={false}
            initialValues={{
              remember: false,
            }}
          >
            <Form.Item
              label={formatMessage('auth.username')}
              name="userName"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder={formatMessage('auth.email')} />
            </Form.Item>
            <Form.Item
              label={formatMessage('auth.password')}
              name="password"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.Password placeholder={formatMessage('auth.password')} />
            </Form.Item>

            {errorStatus && <RenderError errorStatus={errorStatus} />}
            {/* <div className="forgot__pass">
              <a href="/">Quên mật khẩu</a>
            </div> */}
            <Button htmlType="submit" type='primary'>{formatMessage('login.button.account')}</Button>
            {/* <Button htmlType="submit">
              {formatMessage('register.button.account')}
            </Button> */}
          </Form>
        </div>
      </div>
    </>
  );
};
export default Login;
