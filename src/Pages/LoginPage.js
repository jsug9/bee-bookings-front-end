import '../Styles/login_page.scss';

export const toggleLogin = () => {
  const loginPage = document.getElementById('loginPage');
  console.log(loginPage);
  loginPage.classList.toggle('invisible');
  loginPage.classList.toggle('flex');
};

const LoginPage = () => (
  <div id="loginPage" className="invisible">
    <div id="loginClose" role="presentation" onClick={toggleLogin}>X</div>
    <div className="loginForm mobile">
      <h1>Login</h1>
      <section className="loginSection" id="loginSection">
        <form className="LoginForm" method="post">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
            required
            maxLength="30"
          />
          {/* <input
            type="email"
            name="email"
            id="mail"
            placeholder="Email address"
            title="Please use all lower-case characters for your email address"
            required
          /> */}
          <span className="error" aria-live="polite" />
          <button type="submit" className="loginBtn">login</button>
        </form>
      </section>
    </div>
  </div>
);

export default LoginPage;
