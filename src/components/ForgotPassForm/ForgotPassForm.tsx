import { useTranslation } from 'next-i18next';
import Title from '../UI/Title/Title';
import InputWithLabel from '../UI/InputWithLabel/InputWithLabel';
import Button from '../UI/Button/Button';
import TextField from '../UI/TextField/TextField';
import LinkItem from '../UI/LinkItem/LinkItem';
import IForgotPasswordView from '../../pages/ForgotPassword/interfaces/IForgotPasswordView';
import { STRINGS } from '../../constants/auth';
import { ROUTES } from '../../constants/routes';
import styles from './sass/ForgotPassForm.module.scss';

const ForgotPassForm = ({
  handleForgotPassword, handleInputChange, fields, formErrors, error,
}: IForgotPasswordView) => {
  const { t } = useTranslation('auth');

  return (
    <div className={styles.container}>
      <Title>{t('resetPass')}</Title>
      <TextField text={t('textReset')} textClass={STRINGS.TEXT_RESET} />
      <InputWithLabel
        id={STRINGS.EMAIL}
        value={fields?.email}
        text={t('email')}
        onChange={handleInputChange}
        textClass={STRINGS.TEXT_LABEL}
        error={(formErrors?.email ? t(`error:${formErrors?.email}`) : '') || error}
      />
      <Button handleClick={handleForgotPassword}>{t('resetPass')}</Button>
      <LinkItem url={ROUTES.LOGIN} text={t('toLogin')} styleType={STRINGS.RESET_LINK} />
    </div>
  );
};

export default ForgotPassForm;
