import authenticationPresenter from '@modules/authentication/presenter';
import { useSingleAsync } from '@hook/useAsync';
import { useAltaIntl } from '@hook/useTranslate';
import RenderError from '@view/Auth/components/RenderError';
import { IUpdatePasswordForm } from '@view/Auth/interface';
import { Input, Button, Form } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import ChangeLanguage from '@shared/components/ChangeLanguage';
import { logo_vcpmc } from '@assets/images';

const UpdatePasswordForm: React.FC<IUpdatePasswordForm> = props => {
  const navigate = useNavigate();
  const { formatMessage } = useAltaIntl();
  // const { resetPass } = authenticationPresenter;
  // const resetPasswordCall = useSingleAsync(resetPass);

  const [errorStatus, setErrorStatus] = useState('');
  const onSubmitResetPassword = (values: any) => {
    // resetPasswordCall?.execute(values, props.recoveryToken).then(() => {
    //   navigate('/login');
    // });
    navigate('/login');
  };

  const onFinishFailed = () => {
    setErrorStatus('');
  };

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
        <h1 className="reset-password-title text-center">Đặt lại mật khẩu</h1>
        <div className="reset-password-form">
          <Form
            name="resetPassword"
            layout="vertical"
            onFinish={onSubmitResetPassword}
            onFinishFailed={onFinishFailed}
            requiredMark={false}
          >
            <Form.Item
              label="Mật khẩu mới"
              name="accountPassword"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.Password placeholder={formatMessage('auth.password.new')} />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              label="Nhập lại mật khẩu mới"
              dependencies={['accountPassword']}
              rules={[
                {
                  required: true,
                },
                ({ getFieldValue }) => ({
                  validator(_, passwordConfirm) {
                    if (!passwordConfirm || getFieldValue('accountPassword') === passwordConfirm) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error(formatMessage('auth.password.not.match')));
                  },
                }),
              ]}
            >
              <Input.Password placeholder={formatMessage('auth.password.confirm')} />
            </Form.Item>
            {errorStatus && <RenderError errorStatus={errorStatus} />}
            <div className="normal-button">
              <Button htmlType="submit">Lưu mật khẩu</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePasswordForm;
