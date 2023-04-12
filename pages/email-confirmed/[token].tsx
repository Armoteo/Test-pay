import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import EmailConfirmedView from '../../src/pages/EmailConfirmed/EmailConfirmedView';
import IServerSideProps from '../../src/interfaces/IServerSideProps';
import { EmailConfirmProps } from '../../src/store/auth/interfaces/ISignUpWorker';
import { confirmEmailAsync } from '../../src/store/auth/slice';
import { useAppDispatch } from '../../src/hooks/storeHook';
import { setToLocalStorage } from '../../src/utils/helper';
import { STRINGS } from '../../src/constants/auth';
import { ROUTES } from '../../src/constants/routes';

const EmailConfirmed = () => {
  const { t } = useTranslation('auth');
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { token } = router.query;

  useEffect(() => {
    if (token !== null && typeof token === STRINGS.TYPE_STRING) {
      dispatch(confirmEmailAsync({ token, router } as EmailConfirmProps))
        .catch((error: string) => setToLocalStorage('confirmError', error));
    }
  }, [dispatch, token, router]);

  const navigateToLogin = () => router.push(ROUTES.LOGIN).catch((error: unknown) => error);

  return (
    <EmailConfirmedView
      btnTitle={t('toLogin')}
      text={t('textSuccess')}
      title={t('congrats')}
      textClass={STRINGS.TEXT_CONFIRM}
      navigateToLogin={navigateToLogin}
    />
  );
};

export const getServerSideProps = async ({ locale }: IServerSideProps) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'auth'])),
  },
});

export default EmailConfirmed;
