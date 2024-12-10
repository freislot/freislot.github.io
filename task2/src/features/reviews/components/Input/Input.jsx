import React from 'react';
import styles from './Input.module.css'

export const Input = ({
  onChange = () => {},
  placeholder = '',
  name = '',
  label = ''
} = {}) => {
  return (
    <div class={styles.input}>
      <input 
        type="text"
        id={name}
        placeholder={placeholder}
        onChange={onChange}
      />
      <label for={name}>{label}</label>
    </div>
  );
};
