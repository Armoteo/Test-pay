import IConfirmEmail from '../../ConfirmEmail/interfaces/IConfirmEmail';

export default interface IEmailConfirmed extends IConfirmEmail {
  src?: string;
  navigateToLogin?: () => Promise<unknown>;
}
