import '../Styles/login_page.scss';

export const toggleLogin = () => {
  const loginPage = document.getElementById('loginPage');
  console.log(loginPage);
  loginPage.classList.toggle('invisible');
  loginPage.classList.toggle('flex');
};

const LoginPage = () => (
  <div id="loginPage" className="flex">
    <div id="loginClose" role="presentation" onClick={toggleLogin}>X</div>
  </div>
);

export default LoginPage;
