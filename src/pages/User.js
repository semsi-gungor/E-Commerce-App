import React, { useState } from 'react';
import classes from './UserPage.module.css';
import Login from '../components/User/Login';
import SignUp from '../components/User/SignUp';

function UserPage() {
  const [isLogin, setIsLogin] = useState(true);

  function loginStateHandler() {
    setIsLogin((prev) => !prev);
  }

  return (
    <div className={classes.container}>
      {isLogin && <Login onLogin={loginStateHandler} />}
      {!isLogin && <SignUp onLogin={loginStateHandler} />}
    </div>
  );
}
export default UserPage;
