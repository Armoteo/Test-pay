import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import SignUpView from '../src/pages/SignUp/SignUpView';
import IServerSideProps from '../src/interfaces/IServerSideProps';
import { setFieldsData, signUpAsync, resetState } from '../src/store/auth/slice';
import { useAppSelector as useSelector, useAppDispatch as useDispatch } from '../src/hooks/storeHook';
import { validationPassword } from '../src/utils/validations';
import { setToLocalStorage } from '../src/utils/helper';
import { STRINGS } from '../src/constants/auth';

const SignUp = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { fields, formErrors } = useSelector(({ auth }) => auth);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string>('');
  const [acceptTerms, setAcceptTerms] = useState<boolean>(false);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  useEffect(() => {
    const errors = validationPassword(fields?.password);
    setValidationErrors(errors);
  }, [fields?.password]);

  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);

  const handleSignUp = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    dispatch(signUpAsync({
      fields, setError, router, validationErrors,
    }))
      .catch((err: string) => setToLocalStorage(STRINGS.SIGNUP_ERROR, err));
  };

  const togglePassword = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target instanceof SVGElement && e.target.nodeName !== STRINGS.INPUT) {
      setShowPassword(!showPassword);
    }
  };

  const handleAcceptTerms = () => setAcceptTerms(!acceptTerms);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    dispatch(setFieldsData({ [id]: value }));
  };

  const classesForValidation = (textError: string) => {
    const isError = validationErrors.includes(textError);
    let style: string;
    if (fields?.password.length > 0 && isError) {
      style = STRINGS.TEXT_VALIDATION_ERROR;
    } else if (fields?.password.length > 0 && !isError) {
      style = STRINGS.TEXT_VALIDATION_SUCCESS;
    } else {
      style = STRINGS.TEXT_VALIDATION;
    }

    return style;
  };

  return (
    <SignUpView
      fields={fields}
      error={error}
      handleInputChange={handleInputChange}
      togglePassword={togglePassword}
      showPassword={showPassword}
      handleSignUp={handleSignUp}
      acceptTerms={acceptTerms}
      setAcceptTerms={handleAcceptTerms}
      classesForValidation={classesForValidation}
      formErrors={formErrors}
    />
  );
};

export const getServerSideProps = async ({ locale }: IServerSideProps) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'auth', 'error'])),
  },
});

export default SignUp;
