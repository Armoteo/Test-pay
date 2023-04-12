import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import LoginView from '../src/pages/Login/LoginView';
import IServerSideProps from '../src/interfaces/IServerSideProps';
import { useAppDispatch, useAppSelector } from '../src/hooks/storeHook';
import { loginAsync, resetState, setFieldsDataLogin } from '../src/store/auth/slice';
import { setToLocalStorage } from '../src/utils/helper';
import { STRINGS } from '../src/constants/auth';

const Login = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string>('');
  const { fields, formErrors } = useAppSelector(({ auth }) => auth);

  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);

  const handleLogin = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    setError('');
    dispatch(loginAsync({
      fields, setError, router,
    }))
      .catch((err: string) => setToLocalStorage(STRINGS.LOGIN_ERROR, err));
  };

  const togglePassword = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target instanceof SVGElement && e.target.nodeName !== STRINGS.INPUT) {
      setShowPassword(!showPassword);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    dispatch(setFieldsDataLogin({ [id]: value }));
  };

  return (
    <LoginView
      handleLogin={handleLogin}
      error={error}
      fields={fields}
      togglePassword={togglePassword}
      showPassword={showPassword}
      handleInputChange={handleInputChange}
      formErrors={formErrors}
    />
  );
};

export const getServerSideProps = async ({ locale }: IServerSideProps) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'auth', 'error'])),
  },
});

export default Login;
