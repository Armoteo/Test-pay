import ImageItem from '../../components/UI/ImageItem/ImageItem';
import Layout from '../../layout/Layout';
import LoginForm from '../../components/LoginForm/LoginForm';
import ILoginView from './interfaces/ILoginView';

const LoginView = ({
  togglePassword, showPassword, handleInputChange, fields, handleLogin, error, formErrors,
}: ILoginView) => (
  <Layout>
    <ImageItem
      src="/main_bg.png"
      styleType="imageBg"
      layout="fill"
      objectFit="cover"
    />
    <LoginForm
      togglePassword={togglePassword}
      showPassword={showPassword}
      handleInputChange={handleInputChange}
      fields={fields}
      handleLogin={handleLogin}
      error={error}
      formErrors={formErrors}
    />
  </Layout>
);

export default LoginView;
