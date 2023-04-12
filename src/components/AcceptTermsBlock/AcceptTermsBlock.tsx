import IAcceptTermsBlock from './interfaces/IAcceptTermsBlock';
import TextWithLink from '../UI/TextWithLink/TextWithLink';
import CheckboxChecked from '../Icons/CheckboxChecked';
import Checkbox from '../Icons/Checkbox';
import styles from './sass/AcceptTerms.module.scss';

const AcceptTermsBlock = ({
  text1, text2, textLink1, textLink2, checked, onClick,
}: IAcceptTermsBlock) => (
  <div className={styles.container}>
    <div onClick={onClick} aria-hidden="true">
      {checked ? <CheckboxChecked /> : <Checkbox />}
    </div>
    <TextWithLink text={text1} textLink={textLink1} />
    <TextWithLink text={text2} textLink={textLink2} />
  </div>
);

export default AcceptTermsBlock;
