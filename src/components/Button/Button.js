import React from 'react';
import './Button.css';

function Button(props) {
  const clickEvent = () => {
    console.log('click');
  };

  const { variant = 'primary', children, ...rest } = props;
  return (
    <button className={`button ${variant}`} onClick={clickEvent} {...rest}>
      {children}
    </button>
  );
}

export default Button;
