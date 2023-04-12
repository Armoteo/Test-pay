import Warning from '../Icons/Warning';
import IErrorNotification from './interfaces/ErrorNotification';
import styles from './sass/ErrorNotification.module.scss';
import TextField from '../UI/TextField/TextField';

const ErrorNotification = ({ error }: IErrorNotification) => (
  <div className={styles.container}>
    <Warning />
    <TextField text={error} />
  </div>
);

export default ErrorNotification;
