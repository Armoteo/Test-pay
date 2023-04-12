import IConfirmEmail from '../../../pages/ConfirmEmail/interfaces/IConfirmEmail';
import IEmailConfirmed from '../../../pages/EmailConfirmed/interfaces/IEmailConfirmed';

type HandleClickType = ((e: React.SyntheticEvent<EventTarget>) => void) | (() => void);

export interface IInfoEmail extends IConfirmEmail, IEmailConfirmed {
  handleClick: HandleClickType | undefined;
}
