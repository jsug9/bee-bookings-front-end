import '../Styles/login_page.scss';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { toggleSignup } from './SignupPage';
import { signIn } from '../Redux/user/UserReducer';

// Toggles visibility of the login page overlay
// NO TOUCHY: specially Augusto
export const toggleLogin = () => {
  const loginPage = document.getElementById('loginPage');
  loginPage.classList.toggle('invisible');
  loginPage.classList.toggle('flex');
};

// Toggles visibility of the login page overlay when the user clicks the sign up link
// NO TOUCHY: specially Augusto
const signupToggle = () => {
  toggleLogin();
  toggleSignup();
};

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(username));
  };
  return (
    <div id="loginPage" className={user.userId ? 'hide' : 'invisible'}>
      <div id="loginClose" role="presentation" onClick={toggleLogin}>X</div>
      <div className="loginForm mobile">
        <h1>Buzz In</h1>
        <section className="loginSection" id="loginSection">
          <form className="loginForm" method="post" onSubmit={handleSubmit}>
            <TextField
              style={{ backgroundColor: 'white', borderRadius: '4px' }}
              type="text"
              name="username"
              id="username"
              label="Enter your username"
              required
              maxLength="30"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <span className="error" aria-live="polite" />
            <button type="submit" id="submitLogin" className="loginBtn">Let&apos;s Go!</button>
          </form>
          <div className="signupLink">
            <p id="signup" role="presentation" onClick={signupToggle}>Sign Up</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoginPage;
