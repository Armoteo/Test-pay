import styles from './sass/Stripe.module.scss';
import Card from '../../components/Card/Card';
import IStripeView from './interfaces/IStripeView';
import Layout from '../../layout/Layout';

const StripeView = ({ redirectToCheckout, list }: IStripeView) => (
  <Layout>
    <div className={styles.checkout}>
      {list?.length > 0 && list?.map((item, index) => (
        <Card
          key={[item?.product.name, index].join('_')}
          label={item?.product.name}
          src={item?.product.images}
          price={item.unit_amount}
          handlerBuy={redirectToCheckout}
          id={item.id}
        />
      ))}
    </div>
  </Layout>
);

export default StripeView;
