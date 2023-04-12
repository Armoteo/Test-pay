import { IAuth } from '../../../store/auth/interfaces/IAuth';

export default interface ILoginView extends IAuth {
  togglePassword: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  showPassword: boolean;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogin: (e: React.SyntheticEvent<EventTarget>) => void;
  error: string;
}
