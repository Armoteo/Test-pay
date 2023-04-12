import { IAuth } from '../../../store/auth/interfaces/IAuth';

export default interface IResetPasswordView extends IAuth {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  togglePassword: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  showPassword: boolean;
  classesForValidation: (text: string) => string;
  handleResetPass: () => void;
}
