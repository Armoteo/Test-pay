import React from 'react';
import PropTypes from 'prop-types';
import styles from './sass/About.module.scss';
import Card from '../../components/Card/Card';

const AboutView = ({ redirectToCheckout, list }) => {
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

AboutView.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({})),
  redirectToCheckout: PropTypes.func.isRequired,
};

AboutView.defaultProps = {
  list: [],

};

export default AboutView;
