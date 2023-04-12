import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import ConfirmEmailView from '../src/pages/ConfirmEmail/ConfirmEmailView';
import IServerSideProps from '../src/interfaces/IServerSideProps';
import { resendEmailAsync } from '../src/store/auth/slice';
import { useAppDispatch } from '../src/hooks/storeHook';
import { getFromLocalStorage } from '../src/utils/helper';
import { STRINGS } from '../src/constants/auth';

const ConfirmEmail = () => {
  const { t } = useTranslation('auth');
  const dispatch = useAppDispatch();
  const email = getFromLocalStorage('email');

  const handleResendEmail = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    if (email !== null) {
      dispatch(resendEmailAsync({ email }))
        .catch(() => {});
    }
  };

  return (
    <ConfirmEmailView
      btnTitle={t('resend')}
      text={t('textConfirm')}
      title={t('confirm')}
      textClass={STRINGS.TEXT_CONFIRM}
      handleResendEmail={handleResendEmail}
    />
  );
};

export const getServerSideProps = async ({ locale }: IServerSideProps) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'auth'])),
  },
});

export default ConfirmEmail;
