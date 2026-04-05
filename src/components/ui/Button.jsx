import React from 'react';
import styles from './ui.module.css';

export const Button = ({ children, variant = 'primary', fullWidth, className = '', ...props }) => {
  const classes = [
    styles.btn,
    styles[variant],
    fullWidth ? styles.fullWidth : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
