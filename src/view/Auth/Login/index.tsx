// import "./Login.css";
import '../styles.scss';
import './styles.scss';
import React, { useState } from 'react';
import { logo_vcpmc } from '@assets/images';
import ChangeLanguage from '@shared/components/ChangeLanguage';
import { Link } from 'react-router-dom';
import { Input, Form, Button, Checkbox } from 'antd';
import { useNavigate } from 'react-router';
const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [formDatas, setFormDatas] = useState({
    username: '',
    password: '',
  });
  const { username, password } = formDatas;
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormDatas({ ...formDatas, [name]: value });
    setErrorMessage('');
    const inputUsername = document.querySelector('.login-username');
    const inputPassword = document.querySelector('.login-password');
    if (inputUsername !== null && inputUsername.classList.contains('error-input') ) {
      inputUsername.classList.remove('error-input');
    }
    if (inputPassword !== null && inputPassword.classList.contains('error-input') ) {
      inputPassword.classList.remove('error-input');
    }
  };
  const handleSubmit = (e: any) => {
    console.log('formDatas', formDatas);
    formDatas.username = username;
    formDatas.password = password;
    const inputUsername = document.querySelector('.login-username');
    const inputPassword = document.querySelector('.login-password');
    if (username === '' || password === '') {
      console.log('Please enter username and password');
      setErrorMessage('Hãy nhập tài khoản và mật khẩu');
      if (username === '' && inputUsername !== null) {
        inputUsername.classList.add('error-input');
      }
      if (password === '' && inputPassword !== null) {
        inputPassword.classList.add('error-input');
      }
      console.log('inputUsername', inputUsername);
      console.log('inputPassword', inputPassword);
    } else if (username === 'a' && password === '1') {
      setErrorMessage('');
      console.log('Login success');
      navigate('/');
    } else {
      setErrorMessage('Sai tên đăng nhập hoặc mật khẩu');
      console.log('Login fail');
      if (inputUsername !== null && inputPassword !== null) {
        inputUsername.classList.add('error-input');
        inputPassword.classList.add('error-input');
      }
    }
  };
  return (
    <div className="login">
      <div className="d-flex justify-content-end language">
        <ChangeLanguage />
      </div>

      <div className="flex-column d-flex gap-5">
        <div className="d-flex justify-content-center">
          <div className="logo">
            <img width={240} src={logo_vcpmc} alt="vcpmc" />
          </div>
        </div>
        <h1 className="login-title text-center">Đăng nhập</h1>
        <Form id="login-form" layout="vertical" onFinish={e => handleSubmit(e)}>
          <Form.Item name="username" label="Tên đăng nhập" required>
            <Input
              name="username"
              className="login-username"
              autoComplete="off"
              onChange={handleChange}
              value={formDatas.username}
            />
          </Form.Item>

          <Form.Item name="password" label="Password" required>
            <Input.Password
              name="password"
              type="password"
              className="login-password"
              autoComplete="off"
              onChange={handleChange}
              value={formDatas.password}
            />
          </Form.Item>
          {errorMessage && (
            <div className="error-message-wrapper">
              <span className="error-message">{errorMessage}</span>
            </div>
          )}

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox className="remember-checkbox">Ghi nhớ đăng nhập</Checkbox>
          </Form.Item>

          <Form.Item className="login-btn-item">
            <Button className="login-btn" type="primary" htmlType="submit">
              Đăng nhập
            </Button>
          </Form.Item>
          <Form.Item className="forgot-password-link">
            <Link to="/forgot-password">Quên mật khẩu?</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
