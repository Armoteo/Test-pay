import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '../../src/hooks/storeHook';
import ResetPasswordView from '../../src/pages/ResetPassword/ResetPasswordView';
import IServerSideProps from '../../src/interfaces/IServerSideProps';
import { ResetPassProps } from '../../src/store/auth/interfaces/ISignUpWorker';
import { resetPassAsync, setFieldsData } from '../../src/store/auth/slice';
import { setToLocalStorage } from '../../src/utils/helper';
import { validationPassword } from '../../src/utils/validations';
import { STRINGS } from '../../src/constants/auth';

const ResetPassword = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { fields, formErrors } = useAppSelector(({ auth }) => auth);
  const [showPassword, setShowPassword] = useState(false);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const { token } = router.query;

  const handleResetPass = () => {
    if (token !== null && typeof token === STRINGS.TYPE_STRING) {
      dispatch(resetPassAsync({
        fields, token, router,
      } as ResetPassProps))
        .catch((err: string) => setToLocalStorage(STRINGS.RESET_ERROR, err));
    }
  };

  useEffect(() => {
    const errors = validationPassword(fields?.newPassword);
    setValidationErrors(errors);
  }, [fields?.newPassword]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    dispatch(setFieldsData({ [id]: value }));
  };

  const togglePassword = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target instanceof SVGElement && e.target.nodeName !== STRINGS.INPUT) {
      setShowPassword(!showPassword);
    }
  };

  const classesForValidation = (textError: string) => {
    const isError = validationErrors.includes(textError);
    let style: string;
    if (fields?.newPassword.length > 0 && isError) {
      style = STRINGS.TEXT_VALIDATION_ERROR;
    } else if (fields?.newPassword.length > 0 && !isError) {
      style = STRINGS.TEXT_VALIDATION_SUCCESS;
    } else {
      style = STRINGS.TEXT_VALIDATION;
    }

    return style;
  };

  return (
    <ResetPasswordView
      fields={fields}
      handleInputChange={handleInputChange}
      togglePassword={togglePassword}
      formErrors={formErrors}
      classesForValidation={classesForValidation}
      showPassword={showPassword}
      handleResetPass={handleResetPass}
    />
  );
};

export const getServerSideProps = async ({ locale }: IServerSideProps) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'auth', 'error'])),
  },
});

export default ResetPassword;
