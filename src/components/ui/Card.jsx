import React from 'react';
import styles from './ui.module.css';

export const Card = ({ children, className = '', ...props }) => (
  <div className={`${styles.card} ${className}`} {...props}>{children}</div>
);

export const CardHeader = ({ children, className = '' }) => (
  <div className={`${styles.cardHeader} ${className}`}>{children}</div>
);

export const CardTitle = ({ children, className = '' }) => (
  <h3 className={`${styles.cardTitle} ${className}`}>{children}</h3>
);

export const CardDescription = ({ children, className = '' }) => (
  <p className={`${styles.cardDescription} ${className}`}>{children}</p>
);

export const CardContent = ({ children, className = '' }) => (
  <div className={`${styles.cardContent} ${className}`}>{children}</div>
);

export const CardFooter = ({ children, className = '' }) => (
  <div className={`${styles.cardFooter} ${className}`}>{children}</div>
);
