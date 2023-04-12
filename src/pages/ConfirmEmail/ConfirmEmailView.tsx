import Layout from '../../layout/Layout';
import ImageItem from '../../components/UI/ImageItem/ImageItem';
import InfoEmail from '../../components/InfoEmail/InfoEmail';
import IConfirmEmail from './interfaces/IConfirmEmail';

const ConfirmEmailView = ({
  title, text, btnTitle, textClass, handleResendEmail,
}: IConfirmEmail) => (
  <Layout>
    <ImageItem
      src="/main_bg.png"
      styleType="imageBg"
      layout="fill"
      objectFit="cover"
    />
    <InfoEmail
      title={title}
      text={text}
      btnTitle={btnTitle}
      textClass={textClass}
      handleClick={handleResendEmail}
    />
  </Layout>
);

export default ConfirmEmailView;
