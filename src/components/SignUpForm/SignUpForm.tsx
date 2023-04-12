import { useTranslation } from 'next-i18next';
import Title from '../UI/Title/Title';
import InputWithLabel from '../UI/InputWithLabel/InputWithLabel';
import ValidationBlock from '../ValidationBlock/ValidationBlock';
import AcceptTermsBlock from '../AcceptTermsBlock/AcceptTermsBlock';
import Button from '../UI/Button/Button';
import TextWithLink from '../UI/TextWithLink/TextWithLink';
import OpenEye from '../Icons/OpenEye';
import CloseEye from '../Icons/CloseEye';
import ISignUpView from '../../pages/SignUp/interfaces/ISignUpView';
import { STRINGS } from '../../constants/auth';
import { ROUTES } from '../../constants/routes';
import styles from './sass/SignUpForm.module.scss';

const SignUpForm = ({
  togglePassword,
  showPassword,
  handleInputChange,
  fields,
  handleSignUp,
  error,
  acceptTerms,
  setAcceptTerms,
  classesForValidation,
  formErrors,
}: ISignUpView) => {
  const { t } = useTranslation('auth');

  return (
    <div className={styles.container}>
      <Title>{t('createAccount')}</Title>
      <div className={styles.wrapper}>
        <InputWithLabel
          id={STRINGS.FIRST_NAME}
          text={t('firstName')}
          value={fields?.firstName}
          onChange={handleInputChange}
          textClass={STRINGS.TEXT_LABEL}
          error={formErrors?.firstName ? t(`error:${formErrors?.firstName}`) : ''}
        />
        <InputWithLabel
          id={STRINGS.LAST_NAME}
          text={t('lastName')}
          value={fields?.lastName}
          onChange={handleInputChange}
          textClass={STRINGS.TEXT_LABEL}
          error={formErrors?.lastName ? t(`error:${formErrors?.lastName}`) : ''}
        />
      </div>
      <InputWithLabel
        id={STRINGS.EMAIL}
        value={fields?.email}
        text={t('email')}
        onChange={handleInputChange}
        textClass={STRINGS.TEXT_LABEL}
        error={(formErrors?.email ? t(`error:${formErrors?.email}`) : '') || error}
      />
      <div
        className={`${styles.password} ${formErrors?.password ? styles.error : ''}`}
        onClick={togglePassword}
        aria-hidden="true"
      >
        <InputWithLabel
          id={STRINGS.PASSWORD}
          text={t('password')}
          type={showPassword ? 'text' : 'password'}
          value={fields?.password}
          onChange={handleInputChange}
          textClass={STRINGS.TEXT_LABEL}
          error={formErrors?.password ? t(`error:${formErrors?.password}`) : ''}
        />
        {showPassword ? <OpenEye /> : <CloseEye />}
      </div>
      <ValidationBlock classesForValidation={classesForValidation} />
      <AcceptTermsBlock
        text1={t('agreeTo')}
        text2={t('and')}
        textLink1={t('terms')}
        textLink2={t('privacyPolicy')}
        checked={acceptTerms}
        onClick={setAcceptTerms}
      />
      <Button handleClick={handleSignUp} disabledButton={!acceptTerms}>{t('createAccount')}</Button>
      <TextWithLink
        text={t('haveAcc')}
        url={ROUTES.LOGIN}
        textLink={t('signIn')}
        linkClass={STRINGS.RED_LINK}
        textClass={STRINGS.TEXT_INFO}
      />
    </div>
  );
};

export default SignUpForm;
