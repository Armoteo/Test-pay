import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import cookie from 'cookie';
import IError from '../src/pages/Error/interfaces/IError';
import IServerSideProps from '../src/interfaces/IServerSideProps';
import ErrorView from '../src/pages/Error/ErrorView';

const Error = ({ statusCode }: IError) => (
  <ErrorView statusCode={statusCode} />
);

export const getServerSideProps = async ({ locale, req, res }: IServerSideProps) => {
  const cookieData = req.headers.cookie ? cookie.parse(req.headers.cookie) : {};
  if (!cookieData.accessToken) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'error'])),
      statusCode: res?.statusCode || 404,
    },
  };
};

export default Error;
