import React from 'react';
import PropTypes from 'prop-types';

importStylefrom './Button.module.css';

const Button = ({ onLoadMore }) => {
  return (
    <button onClick={onLoadMore} className={Style.Button} type="button">
      Load more
    </button>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired
}
export default Button;
