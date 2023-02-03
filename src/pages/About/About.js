import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { loadStripe } from '@stripe/stripe-js';
import Stripe from 'stripe';
import AboutView from './AboutView';

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }

  return stripePromise;
};

const About = () => {
  const { t } = useTranslation();

  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  
  const getPrices = async () => {
    const stripe = new Stripe(process.env.REACT_APP_STRIPE_SECRET_KEY);
    const { data: prices } = await stripe.prices.list({
      active: true,
      limit: 10,
      expand: ['data.product']
    });
    
    setList(prices);
  };

  useEffect(() => {
    getPrices();
  }, []);

  const redirectToCheckout = async (id) => {
    const item = {
      price: id,
      quantity: 1
    };
  
    const checkoutOptions = {
      lineItems: [item],
      mode: 'payment',
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/cancel`
    };

    setLoading(true);
    console.log('redirectToCheckout');

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log('Stripe checkout error', error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);
  
  return (
    <AboutView
      title={t('aboutPage')}
      isLoading={isLoading}
      list={list}
      redirectToCheckout={redirectToCheckout}
    />
  );
};

export default About;
