import CheckoutPayPal from '../../components/CheckoutPayPal/CheckoutPayPal';
import styles from './sass/PayPal.module.scss';

const PaypalView = () => (
  <div className={styles.checkout}>
    <CheckoutPayPal amount={2.5} label="Buy traveling to wonderful world" />
  </div>
);

export default PaypalView;
