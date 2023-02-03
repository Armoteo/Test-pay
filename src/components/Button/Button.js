import PropTypes from 'prop-types';

const Button = ({ title, buttonClass, handleClick }) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={buttonClass}
      data-testid="button"
    >
      { title }
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  buttonClass: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Button;
