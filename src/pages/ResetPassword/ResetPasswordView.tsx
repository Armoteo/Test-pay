import ResetPassForm from '../../components/ResetPassForm/ResetPassForm';
import Layout from '../../layout/Layout';
import ImageItem from '../../components/UI/ImageItem/ImageItem';
import IResetPasswordView from './interfaces/IResetPasswordView';

const ResetPasswordView = ({
  togglePassword, showPassword, classesForValidation, formErrors, fields, handleInputChange, handleResetPass,
}: IResetPasswordView) => (
  <Layout>
    <ImageItem
      src="/main_bg.png"
      styleType="imageBg"
      layout="fill"
      objectFit="cover"
    />
    <ResetPassForm
      handleInputChange={handleInputChange}
      fields={fields}
      showPassword={showPassword}
      togglePassword={togglePassword}
      classesForValidation={classesForValidation}
      formErrors={formErrors}
      handleResetPass={handleResetPass}
    />
  </Layout>
);

export default ResetPasswordView;
