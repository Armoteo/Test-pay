import ITextField from '../../TextField/interfaces/ITextField';
import ITextArea from '../../TextArea/interfaces/ITextArea';

export default interface ITextAreaWithLabel extends ITextArea, ITextField {
  styleType: string;
}
