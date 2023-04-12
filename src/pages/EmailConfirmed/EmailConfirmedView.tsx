import Layout from '../../layout/Layout';
import ImageItem from '../../components/UI/ImageItem/ImageItem';
import InfoEmail from '../../components/InfoEmail/InfoEmail';
import IEmailConfirmed from './interfaces/IEmailConfirmed';

const EmailConfirmedView = ({
  title, text, btnTitle, textClass, navigateToLogin,
}: IEmailConfirmed) => (
  <Layout>
    <ImageItem
      src="/main_bg.png"
      width={100}
      height={100}
      styleType="imageBg"
      layout="fill"
      objectFit="cover"
    />
    <InfoEmail
      title={title}
      text={text}
      btnTitle={btnTitle}
      textClass={textClass}
      src="/tick.svg"
      handleClick={navigateToLogin}
    />
  </Layout>
);

export default EmailConfirmedView;
