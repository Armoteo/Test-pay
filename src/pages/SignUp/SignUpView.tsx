import ImageItem from '../../components/UI/ImageItem/ImageItem';
import Layout from '../../layout/Layout';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import ISignUpView from './interfaces/ISignUpView';

const SignUpView = ({
  togglePassword,
  showPassword,
  handleInputChange,
  fields,
  handleSignUp,
  error,
  acceptTerms,
  setAcceptTerms,
  classesForValidation,
  formErrors,
}: ISignUpView) => (
  <Layout>
    <ImageItem
      src="/main_bg.png"
      styleType="imageBg"
      layout="fill"
      objectFit="cover"
    />
    <SignUpForm
      fields={fields}
      error={error}
      handleInputChange={handleInputChange}
      handleSignUp={handleSignUp}
      togglePassword={togglePassword}
      showPassword={showPassword}
      acceptTerms={acceptTerms}
      setAcceptTerms={setAcceptTerms}
      classesForValidation={classesForValidation}
      formErrors={formErrors}
    />
  </Layout>
);

export default SignUpView;
