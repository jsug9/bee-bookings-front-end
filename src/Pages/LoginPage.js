import '../Styles/login_page.scss';
import { toggleSignup } from './SignupPage';

export const toggleLogin = () => {
  const loginPage = document.getElementById('loginPage');
  const nav = document.getElementsByTagName('nav');
  nav[0].classList.toggle('invisible');
  loginPage.classList.toggle('invisible');
  loginPage.classList.toggle('flex');
};

const signupToggle = () => {
  toggleLogin();
  toggleSignup();
};

const LoginPage = () => (
  <div id="loginPage" className="invisible">
    <div id="loginClose" role="presentation" onClick={toggleLogin}>X</div>
    <div className="loginForm mobile">
      <h1>Buzz In</h1>
      <section className="loginSection" id="loginSection">
        <form className="loginForm" method="post">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
            required
            maxLength="30"
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

export default LoginPage;
