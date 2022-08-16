import '../Styles/login_page.scss';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { toggleSignup } from './SignupPage';
import { signIn } from '../Redux/user/UserReducer';

export const toggleLogin = () => {
  const loginPage = document.getElementById('loginPage');
  loginPage.classList.toggle('invisible');
  loginPage.classList.toggle('flex');
};

const signupToggle = () => {
  toggleLogin();
  toggleSignup();
};

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(username));
  };
  return (
    <div id="loginPage" className="invisible">
      <div id="loginClose" role="presentation" onClick={toggleLogin}>X</div>
      <div className="loginForm mobile">
        <h1>Buzz In</h1>
        <section className="loginSection" id="loginSection">
          <form className="loginForm" method="post" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
              required
              maxLength="30"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <span className="error" aria-live="polite" />
            <button type="submit" className="loginBtn">Let&apos;s Go!</button>
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
