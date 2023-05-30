import { useState } from 'react';

function emailValidate(input) {
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(input);
}

function passwordValidate(input) {
  var p = input,
    errors = [];
  if (p.length < 8) {
    errors.push('Your password must be at least 8 characters');
  }
  if (p.search(/[a-z]/i) < 0) {
    errors.push('Your password must contain at least one letter.');
  }
  if (p.search(/[0-9]/) < 0) {
    errors.push('Your password must contain at least one digit.');
  }
  if (errors.length > 0) {
    return false;
  }
  return true;
}

function nameValidate(name) {
  var regex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
  return regex.test(name);
}

function validation(validate, input) {
  switch (validate) {
    case 'email':
      return emailValidate(input);
    case 'password':
      return passwordValidate(input);
    case 'name':
      return nameValidate(input);
    default:
      return validate(input);
  }
}

function useInput(validate) {
  const [input, setInput] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isValidInput = validation(validate, input);
  const hasError = isTouched && !isValidInput;

  function onChangeHandler(event) {
    setInput(event.target.value);
  }

  function onBlurHandler() {
    setIsTouched(true);
  }

  function reset(event) {
    setInput('');
    setIsTouched(false);
  }

  return {
    value: input,
    isTouched,
    hasError,
    onChangeHandler,
    onBlurHandler,
    reset,
  };
}

export default useInput;
