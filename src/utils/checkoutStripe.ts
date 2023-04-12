import { loadStripe, Stripe } from '@stripe/stripe-js';
import StripeItem from 'stripe';

interface LineItem {
  price: string;
  quantity: number;
}

export const checkout = async (lineItems: LineItem[]) => {
  let stripePromise: Promise<Stripe | null> | null = null;

  const getStripe = (): Promise<Stripe | null> => {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY || '');
    }
    return stripePromise;
  };

  const stripe = await getStripe();

  await stripe?.redirectToCheckout({
    lineItems,
    mode: 'payment',
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`,
  });
};

export const getPrices = async () => {
  const stripe = new StripeItem(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY || '', { apiVersion: '2022-11-15' });
  const { data: prices } = await stripe.prices.list({
    active: true,
    limit: 10,
    expand: ['data.product'],
  });
  return prices;
};
