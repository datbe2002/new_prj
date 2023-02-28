import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import authenticationPresenter from '@modules/authentication/presenter';
import { useSingleAsync } from '@shared/hook/useAsync';
import { useAltaIntl } from '@shared/hook/useTranslate';
import NavLinkBottom from '../components/NavLinkBottom';
import TokenErrorStatus from './components/TokenErrorStatus';
import UpdatePasswordForm from './components/UpdatePasswordForm';
import '../styles.scss';
import './styles.scss';

const ResetPassword = () => {
  const navigate = useNavigate();
  const { formatMessage } = useAltaIntl();
  const [isRecoveryToken, setIsRecoveryToken] = useState<boolean>(false);
  // const { CheckRecoveryToken } = authenticationPresenter;
  // const CheckRecoveryTokenCall = useSingleAsync(CheckRecoveryToken);
  const { token } = useParams<{ token: any }>();

  // useEffect(() => {
  //   CheckRecoveryTokenCall?.execute(token)
  //     .then(() => {
  //       setIsRecoveryToken(true);
  //     })
  //     .catch(() => {
  //       setIsRecoveryToken(false);
  //     });
  // }, [CheckRecoveryTokenCall, token]);

  useEffect(() => {
    console.log('token', token);
    if (token === '123') {
      console.log('ok');
      setIsRecoveryToken(true);
    } else {
      setIsRecoveryToken(false);
    }
  });
  return (
    <>
      {isRecoveryToken ? <UpdatePasswordForm recoveryToken={token} /> : <TokenErrorStatus />}
      {/* <NavLinkBottom
        navLink={formatMessage('link.return.login')}
        onClick={() => navigate('/login')}
      /> */}
    </>
  );
};
export default ResetPassword;
