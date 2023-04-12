export default interface ITextArea {
  value?: string;
  textAreaClass?: string;
  placeholder?:string;
  onChange?: (event:React.SyntheticEvent<EventTarget>) => void;
  disabled?: boolean;
}
