import { useTranslation } from 'next-i18next';
import TextField from '../UI/TextField/TextField';
import IValidationBlock from './interfaces/IValidationBlock';
import { validations } from '../../constants/auth';
import styles from './sass/ValidationBlock.module.scss';

const ValidationBlock = ({ classesForValidation, styleType }: IValidationBlock) => {
  const { t } = useTranslation('auth');
  return (
    <div className={`${styles.container} ${styleType ? styles[styleType] : ''}`}>
      {validations.map((text) => {
        const className = classesForValidation(text);

        return (
          <TextField text={t(text)} key={text} textClass={className} />
        );
      })}
    </div>
  );
};

export default ValidationBlock;
