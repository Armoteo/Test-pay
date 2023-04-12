import { useTranslation } from 'next-i18next';
import Title from '../UI/Title/Title';
import InputWithLabel from '../UI/InputWithLabel/InputWithLabel';
import Button from '../UI/Button/Button';
import TextWithLink from '../UI/TextWithLink/TextWithLink';
import LinkItem from '../UI/LinkItem/LinkItem';
import OpenEye from '../Icons/OpenEye';
import CloseEye from '../Icons/CloseEye';
import ErrorNotification from '../ErrorNotification/ErrorNotification';
import ILoginView from '../../pages/Login/interfaces/ILoginView';
import { ROUTES } from '../../constants/routes';
import { STRINGS } from '../../constants/auth';
import styles from './sass/LoginForm.module.scss';
import stylesForm from '../SignUpForm/sass/SignUpForm.module.scss';

const LoginForm = ({
  togglePassword, showPassword, handleInputChange, fields, handleLogin, error, formErrors,
}: ILoginView) => {
  const { t } = useTranslation('auth');

  return (
    <div className={`${styles.container} ${error ? styles.containerError : ''}`}>
      {error && <ErrorNotification error={error} />}
      <Title>{t('signIn')}</Title>
      <InputWithLabel
        id={STRINGS.EMAIL}
        text={t('email')}
        textClass={STRINGS.TEXT_LABEL}
        value={fields?.email}
        onChange={handleInputChange}
        error={formErrors?.email ? t(`error:${formErrors?.email}`) : ''}
      />
      <div
        className={`${stylesForm.password} ${formErrors?.password ? stylesForm.error : ''}`}
        onClick={togglePassword}
        aria-hidden="true"
      >
        <InputWithLabel
          id={STRINGS.PASSWORD}
          text={t('password')}
          type={showPassword ? STRINGS.TEXT : STRINGS.PASSWORD}
          value={fields?.password}
          onChange={handleInputChange}
          textClass={STRINGS.TEXT_LABEL}
          error={formErrors?.password ? t(`error:${formErrors?.password}`) : ''}
        />
        {showPassword ? <OpenEye /> : <CloseEye />}
      </div>
      <LinkItem url={ROUTES.FORGOT_PASSWORD} text={t('forgotPass')} styleType={STRINGS.FORGOT_PASS_LINK} />
      <Button handleClick={handleLogin}>{t('signIn')}</Button>
      <TextWithLink
        text={t('notMember')}
        url={ROUTES.SIGN_UP}
        textLink={t('createAccount')}
        linkClass={STRINGS.RED_LINK}
        textClass={STRINGS.TEXT_INFO}
      />
    </div>
  );
};

export default LoginForm;
