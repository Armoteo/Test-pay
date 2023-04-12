export default interface IInput {
  id?: string;
  type?: string;
  value?: string | number;
  placeholder?: string;
  inputClass?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.SyntheticEvent<EventTarget>) => void;
  onKeyDown?: (event: React.SyntheticEvent<EventTarget>) => void;
  onFocus?: (event: React.SyntheticEvent<EventTarget>) => void;
  disabled?: boolean;
  error?: string
}
