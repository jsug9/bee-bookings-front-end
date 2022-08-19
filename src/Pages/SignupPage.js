import '../Styles/signup_page.scss';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../Redux/user/UserReducer';

// Toggles visibility of the signup page overlay
export const toggleSignup = () => {
  const signupPage = document.getElementById('signupPage');
  signupPage.classList.toggle('invisible');
  signupPage.classList.toggle('flex');
};

// Toggles visibility of the login page overlay when the user clicks the log in link
const loginToggle = () => {
  const loginPage = document.getElementById('loginPage');
  loginPage.classList.toggle('invisible');
  loginPage.classList.toggle('flex');
  toggleSignup();
};

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(username));
  };

  return (
    <div id="signupPage" className="invisible">
      <div id="signupClose" role="presentation" onClick={toggleSignup}>X</div>
      <div className="loginForm mobile">
        <h1>{user?.createdUser ? 'Welcome!' : 'Sign Up'}</h1>
        <section className="loginSection" id="loginSection">
          <form className="loginForm" method="post" onSubmit={handleSubmit}>
            <TextField
              style={{ backgroundColor: 'white' }}
              type="text"
              name="username"
              id="username"
              label="Set your user Name"
              required
              maxLength="30"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <span className="error" aria-live="polite">{ user?.createdUser ? 'Account Creation Successful!' : '' }</span>
            <button type="submit" className={user?.createdUser ? 'loginBtn invisible' : 'loginBtn'}>Sign me up!</button>
          </form>
          <div className={user?.createdUser ? 'signupLink invisible' : 'signupLink'}>
            <p id="signup" role="presentation" onClick={loginToggle}>Log in</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SignupPage;
