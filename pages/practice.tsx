import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PracticePageView from '../src/pages/PracticePage/PracticePageView';
import IStaticProps from '../src/interfaces/IStaticProps';

function PracticePage() {
  return (
    <PracticePageView />
  );
}

export async function getStaticProps({ locale }: IStaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'practicePage'])),
    },
  };
}

export default PracticePage;
