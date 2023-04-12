import React, { useEffect, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import StripeView from '../src/pages/Stripe/StripeView';
import IServerSideProps from '../src/interfaces/IServerSideProps';
import { checkout, getPrices } from '../src/utils/checkoutStripe';

interface IList {
  id: string,
  unit_amount: number | null,
  product: {
    name: string,
    images: string
  }
}

const StripePage = () => {
  const [list, setList] = useState<IList[]>([]);

  useEffect(() => {
    getPrices().then((prices) => {
      const newArray = prices.map((item) => ({
        id: item.id,
        unit_amount: item.unit_amount,
        product: {
          name: typeof item.product === 'object' && item.product && 'name' in item.product ? item.product.name : '',
          images: typeof item.product === 'object' && item.product && 'images' in item.product
            ? item.product.images[0] : '',
        },
      }));
      setList(newArray);
    }).catch(() => {});
  }, []);

  const redirectToCheckout = (id: string) => {
    const item = {
      price: id,
      quantity: 1,
    };

    checkout([item]).catch(() => {});
  };

  return (
    <StripeView
      list={list}
      redirectToCheckout={redirectToCheckout}
    />
  );
};

export const getServerSideProps = async ({ locale }: IServerSideProps) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'home'])),
  },
});

export default StripePage;
