import React, { ReactNode } from 'react';

import styles from './Button.module.css';

export interface ButtonProps {
  /** children for the button */
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }: ButtonProps) => {
  return <button className={styles.error}>{children}</button>;
};

export default Button;
