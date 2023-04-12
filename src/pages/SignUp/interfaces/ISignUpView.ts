import { IAuth } from '../../../store/auth/interfaces/IAuth';

export default interface ISignUpView extends IAuth {
  togglePassword: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  showPassword: boolean;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSignUp: (e: React.SyntheticEvent<EventTarget>) => void;
  error: string;
  acceptTerms: boolean;
  setAcceptTerms: () => void;
  classesForValidation: (text: string) => string;
}
