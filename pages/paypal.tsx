import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import IServerSideProps from '../src/interfaces/IServerSideProps';
import PaypalView from '../src/pages/PayPal/PayPalView';

const StripePage = () => (
  <PaypalView />
);

export const getServerSideProps = async ({ locale }: IServerSideProps) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'home'])),
  },
});

export default StripePage;
