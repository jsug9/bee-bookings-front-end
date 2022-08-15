import '../Styles/signup_page.scss';

export const toggleSignup = () => {
  const signupPage = document.getElementById('signupPage');
  const nav = document.getElementsByTagName('nav');
  nav[0].classList.toggle('invisible');
  signupPage.classList.toggle('invisible');
  signupPage.classList.toggle('flex');
};

const loginToggle = () => {
  const loginPage = document.getElementById('loginPage');
  const nav = document.getElementsByTagName('nav');
  nav[0].classList.toggle('invisible');
  loginPage.classList.toggle('invisible');
  loginPage.classList.toggle('flex');
  toggleSignup();
};

const SignupPage = () => (
  <div id="signupPage" className="invisible">
    <div id="signupClose" role="presentation" onClick={toggleSignup}>X</div>
    <div className="loginForm mobile">
      <h1>Sign Up</h1>
      <section className="loginSection" id="loginSection">
        <form className="loginForm" method="post">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your desired username"
            required
            maxLength="30"
          />
          <span className="error" aria-live="polite" />
          <button type="submit" className="loginBtn">Sign me up!</button>
        </form>
        <div className="signupLink">
          <p id="signup" role="presentation" onClick={loginToggle}>Log in</p>
        </div>
      </section>
    </div>
  </div>
);

export default SignupPage;