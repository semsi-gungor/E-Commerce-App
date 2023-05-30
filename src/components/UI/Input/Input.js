import React from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import classes from './Input.module.css';

function Input({
  type,
  placeholder,
  info,
  value,
  onChange,
  onBlur,
  hasError,
  errorMessage,
}) {
  const inputClasses = hasError ? 'invalidInput' : '';
  const infoClasses = hasError ? 'invalid' : '';

  return (
    <div className={classes.container}>
      <input
        className={classes[inputClasses]}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        type={type}
        required
      />
      <span className={classes.placeHolder}>{placeholder}</span>
      <p className={classes[infoClasses]}>
        <AiOutlineInfoCircle />
        <span>{hasError ? errorMessage : info}</span>
      </p>
    </div>
  );
}

export default Input;
