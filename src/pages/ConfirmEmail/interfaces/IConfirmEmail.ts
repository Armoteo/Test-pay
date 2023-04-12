export default interface IConfirmEmail {
  title: string;
  text: string;
  btnTitle: string;
  textClass?: string;
  handleResendEmail?: (e: React.SyntheticEvent<EventTarget>) => void;
}
