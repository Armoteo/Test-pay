import ImageItem from '../../components/UI/ImageItem/ImageItem';
import Layout from '../../layout/Layout';
import ForgotPassForm from '../../components/ForgotPassForm/ForgotPassForm';
import IForgotPasswordView from './interfaces/IForgotPasswordView';

const ForgotPasswordView = ({
  handleForgotPassword, handleInputChange, fields, formErrors, error,
}: IForgotPasswordView) => (
  <Layout>
    <ImageItem
      src="/main_bg.png"
      styleType="imageBg"
      layout="fill"
      objectFit="cover"
    />
    <ForgotPassForm
      fields={fields}
      handleForgotPassword={handleForgotPassword}
      handleInputChange={handleInputChange}
      formErrors={formErrors}
      error={error}
    />
  </Layout>
);

export default ForgotPasswordView;
