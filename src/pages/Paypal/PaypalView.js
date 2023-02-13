import React from 'react';
// import PropTypes from 'prop-types';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import CheckoutPayPal from '../../components/CheckoutPayPal/CheckoutPayPal';
import styles from './sass/Paypal.module.scss';

const PaypalView = () => {
  const initialOptions = {
    'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID,
    currency: 'USD',
    intent: 'capture',
  };
  
  return (
    <div className={styles.checkout}>
      <PayPalScriptProvider options={initialOptions}>
        <CheckoutPayPal />
      </PayPalScriptProvider>
    </div>
  );
};

PaypalView.propTypes = {
 
};

PaypalView.defaultProps = {

};

export default PaypalView;
