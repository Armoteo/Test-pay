import React, { useState } from 'react';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useRouter } from 'next/router';
import styles from './sass/CheckoutPayPal.module.scss';
import ImageItem from '../UI/ImageItem/ImageItem';

type PayPalButtonProps = {
  amount: number;
  label: string;
};

const CheckoutPayPal = ({ amount, label }: PayPalButtonProps) => {
  const router = useRouter();
  const [currency, setCurrency] = useState('USD');

  const paypalOptions = {
    'client-id': process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || '',
  };

  const onCurrencyChange = ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(value);
  };

  const generatePrice = () => (currency === 'USD' ? `${amount}` : (amount * 0.91).toFixed(2));

  return (
    <PayPalScriptProvider options={paypalOptions}>
      <div className={styles.container}>
        <div className={styles.imageBox}>
          <ImageItem src="/goods.jpeg" width={300} height={300} />
        </div>
        <h3>{label}</h3>
        <span>{`${generatePrice()} ${currency || ''}`}</span>
        <div className={styles.paypalContainer}>
          <PayPalButtons
            style={{ layout: 'vertical' }}
            createOrder={(data, actions) => actions.order.create({
              purchase_units: [{ amount: { value: generatePrice(), currency_code: currency } }],
            })}
            onApprove={(data, actions) => {
              if (actions?.order?.capture()) {
                return actions.order.capture().then(() => {
                  router.push('/success').catch(() => {});
                });
              }
              return Promise.resolve();
            }}

          />
          <select value={currency} onChange={onCurrencyChange} className={styles.selectMoney}>
            <option value="USD">💵 USD</option>
            <option value="EUR">💶 Euro</option>
          </select>

        </div>
      </div>
    </PayPalScriptProvider>
  );
};

export default CheckoutPayPal;
