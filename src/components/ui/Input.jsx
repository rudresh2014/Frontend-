import React from 'react';
import styles from './ui.module.css';

export const Input = ({ label, icon: Icon, error, className = '', ...props }) => {
  return (
    <div className={`${styles.inputWrapper} ${className}`}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.inputContainer}>
        {Icon && (
          <div className={styles.iconWrapper}>
            <Icon size={18} />
          </div>
        )}
        <input 
          className={`${styles.input} ${Icon ? styles.hasIcon : ''} ${error ? styles.inputError : ''}`}
          {...props}
        />
      </div>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};
