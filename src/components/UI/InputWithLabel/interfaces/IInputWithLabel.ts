import ITextField from '../../TextField/interfaces/ITextField';
import IInput from '../../Input/interfaces/IInput';

export default interface IInputWithLabel extends IInput, ITextField {
  styleType?: string;
}
