import { useTranslation } from 'next-i18next';
import Title from '../UI/Title/Title';
import InputWithLabel from '../UI/InputWithLabel/InputWithLabel';
import ValidationBlock from '../ValidationBlock/ValidationBlock';
import Button from '../UI/Button/Button';
import OpenEye from '../Icons/OpenEye';
import CloseEye from '../Icons/CloseEye';
import IResetPasswordView from '../../pages/ResetPassword/interfaces/IResetPasswordView';
import { STRINGS } from '../../constants/auth';
import stylesForm from '../SignUpForm/sass/SignUpForm.module.scss';
import styles from './sass/ResetPassForm.module.scss';

const ResetPassForm = ({
  showPassword, togglePassword, classesForValidation, formErrors, fields, handleInputChange, handleResetPass,
}: IResetPasswordView) => {
  const { t } = useTranslation('auth');

  return (
    <div className={styles.container}>
      <Title>{t('createPass')}</Title>
      <div
        className={`${stylesForm.password} ${formErrors?.newPassword ? stylesForm.error : ''}`}
        onClick={togglePassword}
        aria-hidden="true"
      >
        <InputWithLabel
          id={STRINGS.NEW_PASSWORD}
          text={t('newPass')}
          type={showPassword ? STRINGS.TEXT : STRINGS.PASSWORD}
          value={fields?.newPassword}
          onChange={handleInputChange}
          textClass={STRINGS.TEXT_LABEL}
          error={formErrors?.newPassword ? t(`error:${formErrors?.newPassword}`) : ''}
        />
        {showPassword ? <OpenEye /> : <CloseEye />}
      </div>
      <ValidationBlock classesForValidation={classesForValidation} styleType={STRINGS.RESET_PASS_CONTAINER} />
      <div
        className={`${stylesForm.password} ${formErrors?.confirmPassword ? stylesForm.error : ''}`}
        onClick={togglePassword}
        aria-hidden="true"
      >
        <InputWithLabel
          id={STRINGS.CONFIRM_PASSWORD}
          text={t('confirmPass')}
          type={showPassword ? STRINGS.TEXT : STRINGS.PASSWORD}
          value={fields?.confirmPassword}
          onChange={handleInputChange}
          textClass={STRINGS.TEXT_LABEL}
          error={formErrors?.confirmPassword ? t(`error:${formErrors?.confirmPassword}`) : ''}
        />
        {showPassword ? <OpenEye /> : <CloseEye />}
      </div>
      <Button handleClick={handleResetPass}>{t('save')}</Button>
    </div>
  );
};

export default ResetPassForm;
