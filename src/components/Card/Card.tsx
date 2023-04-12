import styles from './sass/Card.module.scss';
import ICard from './interfaces/ICard';
import ImageItem from '../UI/ImageItem/ImageItem';
import TextField from '../UI/TextField/TextField';

const Card = ({
  label, src, price, handlerBuy, id,
}: ICard) => (
  <div className={styles.container}>
    <div className={styles.imageBox}>
      <ImageItem
        src={src}
        width={450}
        height={600}
      />
    </div>
    <h3>{label}</h3>
    <TextField text={`Price ${price ? price / 100 : 0}$`} />
    <button onClick={() => handlerBuy(id)} type="button">
      Buy it
    </button>
  </div>
);

export default Card;
