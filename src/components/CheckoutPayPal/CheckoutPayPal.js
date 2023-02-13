import React, { useState } from 'react';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { useNavigate } from 'react-router-dom';
import styles from './sass/CheckoutPayPal.module.scss';
import Goods from '../../assets/images/goods.jpeg';

const CheckoutPayPal = () => {
  const navigate = useNavigate();
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const [currency, setCurrency] = useState(options.currency);
  
  const onCurrencyChange = ({ target: { value } }) => {
    setCurrency(value);
    dispatch({
      type: 'resetOptions',
      value: {
        ...options,
        currency: value,
      },
    });
  };

  const onCreateOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: '1.99',
          },
        },
      ],
    });
  };

  const onApproveOrder = (data, actions) => {
    return actions.order.capture().then(() => {
      navigate('/success');
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageBox}>
        <img src={Goods} alt="img" />
      </div>
      <h3>Buy traveling to wonderful world</h3>
      <span>Cost 1.99$</span>
      {
        isPending ? <p>LOADING...</p> : (
          <div className={styles.paypalContainer}>
            <PayPalButtons 
              style={{ layout: 'vertical' }}
              createOrder={(data, actions) => onCreateOrder(data, actions)}
              onApprove={(data, actions) => onApproveOrder(data, actions)}
            />
            <select value={currency} onChange={onCurrencyChange} className={styles.selectMoney}>
              <option value="USD">💵 USD</option>
              <option value="EUR">💶 Euro</option>
            </select>
            
          </div>
        )
      }
    </div>
  );
};

export default CheckoutPayPal;
