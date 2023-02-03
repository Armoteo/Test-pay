import PropTypes from 'prop-types';
import styles from './sass/Card.module.scss';

const Card = ({
  label, src, price, handlerBuy, id 
}) => (
  <div className={styles.container}>
    <h3>{label}</h3>
    <div className={styles.imageBox}>
      <img src={src} alt="img" />
    </div>
    <span>{`Price ${price / 100}$`}</span>
    <button onClick={() => handlerBuy(id)} type="button">
      Buy it
    </button>
  </div>
);

Card.propTypes = {
  label: PropTypes.string,
  src: PropTypes.string,
  price: PropTypes.number,
  handlerBuy: PropTypes.func,
  id: PropTypes.string
};

Card.defaultProps = {
  label: '',
  src: '',
  price: 0,
  handlerBuy: () => {},
  id: ''
};

export default Card;
