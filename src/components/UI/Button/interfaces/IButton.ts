// need to add enum for button style
export default interface IButton {
  id?: string;
  label?: string;
  submit?: boolean;
  styleButton?: string;
  activeClass?: string;
  handleClick?: (event:React.SyntheticEvent<EventTarget>) => void;
  disabledButton?: boolean;
  children?: React.ReactNode;
}
