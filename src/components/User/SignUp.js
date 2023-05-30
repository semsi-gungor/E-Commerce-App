import React, { Fragment } from 'react';
import useInput from '../../hooks/use-input';
import Input from '../UI/Input/Input';
import classes from './Login.module.css';

function SignUp(props) {
  const {
    value: email,
    onChangeHandler: emailChangeHandler,
    onBlurHandler: emailBlurHandler,
    hasError: emailError,
    reset: emailReset,
  } = useInput('email');

  const {
    value: password,
    onChangeHandler: passwordChangeHandler,
    onBlurHandler: passwordBlurHandler,
    hasError: passwordError,
    reset: passwordReset,
  } = useInput('password');

  const {
    value: rePassword,
    onChangeHandler: rePasswordChangeHandler,
    onBlurHandler: rePasswordBlurHandler,
    hasError: rePasswordError,
    reset: rePasswordReset,
  } = useInput((input) => input === password && input !== '');

  const {
    value: name,
    onChangeHandler: nameChangeHandler,
    onBlurHandler: nameBlurHandler,
    hasError: nameError,
    reset: nameReset,
  } = useInput('name');

  const {
    value: lastName,
    onChangeHandler: lastNameChangeHandler,
    onBlurHandler: lastNameBlurHandler,
    hasError: lastNameError,
    reset: lastNameReset,
  } = useInput('name');

  function signupSubmitHandler(event) {
    event.preventDefault();
    console.log(email);
    console.log(password);
    console.log(rePassword);
    console.log(name);
    console.log(lastName);
    emailReset();
    passwordReset();
    rePasswordReset();
    nameReset();
    lastNameReset();
    props.onLogin();
  }
  return (
    <Fragment>
      <h3>KİŞİSEL BİLGİLER</h3>
      <form onSubmit={signupSubmitHandler} className={classes.loginContainer}>
        <Input
          type="text"
          placeholder="E-POSTA ADRESİ"
          info="E-posta adresinizi girin."
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          hasError={emailError}
          errorMessage="E-posta adresiniz yanlış veya eksik."
        />
        <Input
          type="password"
          placeholder="PAROLA"
          info="Parolanızı giriniz."
          value={password}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
          hasError={passwordError}
          errorMessage="Parolanız geçersizdir."
        />
        <Input
          type="password"
          placeholder="PAROLA TEKRAR"
          info="Parolanızı tekrar giriniz."
          value={rePassword}
          onChange={rePasswordChangeHandler}
          onBlur={rePasswordBlurHandler}
          hasError={rePasswordError}
          errorMessage="Paralolar eşleşmiyor."
        />
        <Input
          type="text"
          placeholder="ADI"
          info="Adınızı girin."
          value={name}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          hasError={nameError}
          errorMessage="Geçersiz isim."
        />
        <Input
          type="text"
          placeholder="SOYADI"
          info="Soyadınızı girin."
          value={lastName}
          onChange={lastNameChangeHandler}
          onBlur={lastNameBlurHandler}
          hasError={lastNameError}
          errorMessage="Geçersiz soyadı."
        />
        <button type="submit">KAYDOL</button>
      </form>
    </Fragment>
  );
}

export default SignUp;
