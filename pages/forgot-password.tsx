import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState } from 'react';
import ForgotPasswordView from '../src/pages/ForgotPassword/ForgotPasswordView';
import IServerSideProps from '../src/interfaces/IServerSideProps';
import { forgotPassAsync, setFieldsData } from '../src/store/auth/slice';
import { useAppDispatch, useAppSelector } from '../src/hooks/storeHook';
import { setToLocalStorage } from '../src/utils/helper';
import { STRINGS } from '../src/constants/auth';

const ForgotPassword = () => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState<string>('');
  const { fields, formErrors } = useAppSelector(({ auth }) => auth);

  const handleForgotPassword = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    dispatch(forgotPassAsync({ fields, setError }))
      .catch((err: string) => setToLocalStorage(STRINGS.FORGOT_ERROR, err));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    dispatch(setFieldsData({ [id]: value }));
  };

  return (
    <ForgotPasswordView
      fields={fields}
      handleForgotPassword={handleForgotPassword}
      handleInputChange={handleInputChange}
      formErrors={formErrors}
      error={error}
    />
  );
};

export const getServerSideProps = async ({ locale }: IServerSideProps) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'auth', 'error'])),
  },
});

export default ForgotPassword;
