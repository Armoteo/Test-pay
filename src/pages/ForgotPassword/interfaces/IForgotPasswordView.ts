import { IAuth } from '../../../store/auth/interfaces/IAuth';

export default interface IForgotPasswordView extends IAuth {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleForgotPassword: (e: React.SyntheticEvent<EventTarget>) => void;
  error: string;
}
