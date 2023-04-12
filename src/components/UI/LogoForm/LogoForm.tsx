import Image from 'next/image';
import ILogoForm from './interfaces/ILogoForm';
import styles from './sass/LogoForm.module.scss';

const LogoForm = ({ stylesType }: ILogoForm) => (
  <div className={`${styles.container} ${stylesType ? styles[stylesType] : ''}`}>
    <Image src="/Logo_pet.svg" alt="logo" width={90} height={81} />
  </div>
);

export default LogoForm;
