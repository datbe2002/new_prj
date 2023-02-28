import { isCheckLoading } from '@helper/isCheckLoading';
import { IFormContent, renderForm } from '@hoc/FormHelper';
import { RootState } from '@modules';
import authenticationPresenter from '@modules/authentication/presenter';
import ChangePasswordIcon from '@shared/components/ChangePasswordIcon';
import MainTitleComponent from '@shared/components/MainTitleComponent';
import UpdateUserIcon from '@shared/components/UpdateUserIcon';
import { useSingleAsync } from '@shared/hook/useAsync';
import { useAltaIntl } from '@shared/hook/useTranslate';
import { Button, DatePicker, Form, Input, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AvatarUser from './components/AvatarUser';
import ModalChangePassWord from './components/ModalChangePassWord';
import { routerViewProfile } from './router';
import './style.scss';

const Profile = () => {
  const [form] = Form.useForm();
  const { formatMessage, intl } = useAltaIntl();
  const [isDisableForm, setIsDisableForm] = useState(true);
  const { user } = useSelector((state: RootState) => state.profile);
  const updateProfile = useSingleAsync(authenticationPresenter.updateProfile);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (user != null) {
      setIsDisableForm(true);
      form.setFieldsValue(user);
    }
  }, [form, user]);

  const formContent: IFormContent[] = React.useMemo<IFormContent[]>(() => {
    return [
      {
        name: 'fullName',
        label: 'profile.fullName',
        rules: [{ required: true }],
      },
      {
        name: 'userName',
        label: 'profile.userName',
        rules: [{ required: true }],
      },
      {
        name: 'phone',
        label: 'profile.phone',
        rules: [{ required: true }],
      },
      {
        name: 'internalComment',
        label: 'profile.internalComment',
      },
      {
        name: 'brand',
        label: 'profile.brand',
        disabled: true,
      },
      {
        name: 'roles',
        label: 'profile.role',
        render() {
          return <Input defaultValue={user?.role?.roleName} disabled={true} />;
        },
      },
      {
        name: '_password',
        label: 'profile._password',
        render() {
          return <Input.Password disabled={true} placeholder={'********'} className="password" />;
        },
      },
      {
        name: 'createDateTime',
        label: 'profile.createDateTime',
        render() {
          return <DatePicker disabled={true} format="DD/MM/YYYY" />;
        },
      },
      {
        name: 'isActive',
        label: 'profile.isActive',
        rules: [{ required: true }],
        render(placeholder) {
          return (
            <Select
              placeholder={placeholder}
              disabled={true}
              options={[
                { label: formatMessage('common.statusActive'), value: true },
                { label: formatMessage('common.statusDeactive'), value: false },
              ]}
            />
          );
        },
      },
    ];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const chooseFile = (file: any) => {
    form.setFieldsValue({ avatar: file });
  };

  const onUpdateProfile = (values: any) => {
    delete values.brand;
    delete values.createDateTime;
    delete values.isActive;
    delete values.roles;
    delete values._password;
    if (values) {
      updateProfile.execute(values).then(() => {
        authenticationPresenter.getProfile().then(() => {
          setIsDisableForm(true);
        });
      });
    }
  };

  return (
    <>
      <div className="profile">
        <MainTitleComponent breadcrumbs={routerViewProfile} />
        <div className="main-component">
          <div className="profile_user">
            <AvatarUser disabled={isDisableForm} chooseFile={chooseFile} />
            <div className="wrap_name">
              <span className="name">{user?.userName}</span>
              <span className="role">{user?.role?.roleName}</span>
            </div>
            <div className="wrap-icon">
              <UpdateUserIcon onClick={() => setIsDisableForm(false)} />
              <ChangePasswordIcon onClick={() => setIsVisible(true)} />
            </div>
          </div>
          <div className="profile_form">
            <Form
              name="profile-form"
              initialValues={user}
              layout="vertical"
              requiredMark={false}
              form={form}
              onFinish={onUpdateProfile}
              disabled={isDisableForm}
              id="userProfileForm"
              className="form"
            >
              {renderForm(formContent, intl, true)}
              {isDisableForm === false && (
                <div className="wrap_btn">
                  <Button className="cancel-button" onClick={() => setIsDisableForm(true)}>
                    {formatMessage('common.cancel')}
                  </Button>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="submit"
                    loading={isCheckLoading([updateProfile])}
                  >
                    {formatMessage('common.save')}
                  </Button>
                </div>
              )}
            </Form>
          </div>
        </div>

        <ModalChangePassWord isModalVisible={isVisible} setIsModalVisible={setIsVisible} />
      </div>
    </>
  );
};

export default Profile;
