import React, { Fragment } from 'react';
import useInput from '../../hooks/use-input';
import Input from '../UI/Input/Input';
import classes from './Login.module.css';

function Login(props) {
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

  function submitHandler(event) {
    event.preventDefault();
    console.log(email);
    console.log(password);
    emailReset();
    passwordReset();
  }

  return (
    <Fragment>
      <h3>HESABINIZA GİRİŞ YAPIN</h3>
      <div className={classes.formContainer}>
        <form onSubmit={submitHandler} className={classes.loginContainer}>
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
          <button type="submit">GİRİŞ YAP</button>
          <a href="#">Parolanızı mı unuttunuz?</a>
        </form>
        <div className={classes.signupContainer}>
          <h3>HESAP AÇMAK MI İSTİYORSUNUZ?</h3>
          <button onClick={props.onLogin}>Kaydolun</button>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
