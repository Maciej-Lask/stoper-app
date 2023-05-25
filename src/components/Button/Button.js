import React from 'react';
import styles from './Button.module.scss';

const Button = (props) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      {props.children}
    </button>
  );
};

export default Button;
