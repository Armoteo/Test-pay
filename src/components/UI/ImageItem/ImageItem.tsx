import Image from 'next/image';
import IImage from './interfaces/IImage';
import styles from './sass/Image.module.scss';

const ImageItem = ({
  src, styleType, width, height, layout, objectFit,
}: IImage) => (
  <div className={`${styles.container} ${styleType ? styles[styleType] : ''}`}>
    <Image src={src} width={width} height={height} layout={layout} objectFit={objectFit} />
  </div>
);

export default ImageItem;
