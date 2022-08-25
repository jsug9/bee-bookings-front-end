import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toggleLogin } from '../Pages/LoginPage';
import { toggleSignup } from '../Pages/SignupPage';
import { logOutUser } from '../Redux/user/UserReducer';
import { clearReservations } from '../Redux/reservations/ReservationsReducer';
import '../Styles/navbar.scss';
import beeLogo from '../Assets/BeeLogo.png';

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const [navbar, setNavbar] = React.useState('invisible');
  const dispatch = useDispatch();

  const handleToggleLogin = () => {
    toggleLogin();
    setNavbar(navbar === 'invisible' ? '' : 'invisible');
  };

  const handleToggleSignup = () => {
    toggleSignup();
    setNavbar(navbar === 'invisible' ? '' : 'invisible');
  };

  const handleHamburgerClick = () => {
    setNavbar(navbar === 'invisible' ? '' : 'invisible');
  };

  const handleClick = () => {
    dispatch(logOutUser());
    dispatch(clearReservations());
    setNavbar(navbar === 'invisible' ? '' : 'invisible');
  };

  const generateInactiveUserLinks = () => (
    <>
      <li className="links">
        <p role="presentation" onClick={handleToggleLogin}>Log in</p>
      </li>
      <li className="links">
        <p role="presentation" onClick={handleToggleSignup}>Sign Up</p>
      </li>
    </>
  );

  const generateActiveUserLinks = () => (
    <li>
      <p role="presentation" className="links" onClick={handleClick}>Sign Out</p>
    </li>
  );

  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/add_reservation',
      text: 'Add Reservation',
    },
    {
      id: 3,
      path: '/reservations',
      text: 'Reservations',
    },
    {
      id: 4,
      path: '/add_bee',
      text: 'Add Bee',
    },
    {
      id: 5,
      path: '/delete_bee',
      text: 'Delete Bee',
    },
  ];

  return (
    <>
      <div className="hamburger" id="hamburger" role="presentation" onClick={handleHamburgerClick}>
        <div className="slice" />

        <div className="slice" />

        <div className="slice" />
      </div>
      <nav className={navbar}>
        <ul className="links">
          <li className="appLogoLi"><img className="appLogo" alt="" src={beeLogo} /></li>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                onClick={handleHamburgerClick}
                to={link.path}
              >
                <p>{link.text}</p>
              </NavLink>
            </li>
          ))}
          {user.username ? generateActiveUserLinks() : generateInactiveUserLinks()}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
