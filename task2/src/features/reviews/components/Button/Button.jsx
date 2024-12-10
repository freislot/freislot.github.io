import React from 'react';
import styles from './Button.module.css'

export const Button = ({
  title = '',
  onClick = () => {},
  disabled = false,
  customStyles = {}
} = {}) => {
  return(
    <button 
      className={`${styles.button} ${disabled && styles.disabled}`} 
      onClick={() => !disabled && onClick()}
      style={customStyles}
    >
      {title}
    </button>
  )
}