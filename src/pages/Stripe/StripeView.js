import React from 'react';
import PropTypes from 'prop-types';
import styles from './sass/Stripe.module.scss';
import Card from '../../components/Card/Card';

const StripeView = ({ redirectToCheckout, list }) => {
  return (
    <div className={styles.checkout}>
      {list?.length > 0 && list?.map((item, index) => (
        <Card
          key={[item?.product?.name, index].join('_')}
          label={item?.product?.name}
          src={item?.product?.images[0]}
          price={item?.unit_amount}
          handlerBuy={redirectToCheckout}
          id={item.id}
        />
      ))}
    </div>
  );
};

StripeView.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({})),
  redirectToCheckout: PropTypes.func.isRequired,
};

StripeView.defaultProps = {
  list: [],

};

export default StripeView;
