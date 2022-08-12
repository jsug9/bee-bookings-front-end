import '../Styles/signup_page.scss';

export const toggleSignup = () => {
  const signupPage = document.getElementById('signupPage');
  console.log(signupPage);
  signupPage.classList.toggle('invisible');
  signupPage.classList.toggle('flex');
};

const SignupPage = () => (
  <div id="signupPage" className="flex">
    <div id="signupClose" role="presentation" onClick={toggleSignup}>X</div>
  </div>
);

export default SignupPage;
