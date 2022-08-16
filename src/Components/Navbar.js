import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toggleLogin } from '../Pages/LoginPage';
import { toggleSignup } from '../Pages/SignupPage';
import { logOutUser } from '../Redux/user/UserReducer';
// import { toggleSignup } from '../Pages/SignupPage';
import '../Styles/navbar.scss';

let navbarIsOpen = false;

export const toggleNavbar = () => {
  const nav = document.getElementsByTagName('nav');
  nav[0].classList.toggle('invisible');
  navbarIsOpen = !navbarIsOpen;
};

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOutUser());
  };

  console.log(handleClick);

  const generateInactiveUserLinks = () => (
    <>
      <li className="links">
        <p role="presentation" onClick={toggleLogin}>Log in</p>
      </li>
      <li className="links">
        <p role="presentation" onClick={toggleSignup}>Sign Up</p>
      </li>
    </>
  );

  const generateActiveUserLinks = () => (
    <>
      <li>
        <p role="presentation" onClick={handleClick}>Sign Out</p>
      </li>
    </>
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
      <div className="hamburger" id="hamburger" role="presentation" onClick={toggleNavbar}>
        <div className="slice" />

        <div className="slice" />

        <div className="slice" />
      </div>
      <nav className="invisible">
        <ul className="links">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
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

// Sets listener that determines if the nav is open and if it should be closed
// if a user clicks outside of it or clicks a navlink
document.addEventListener('click', (e) => {
  const nav = document.getElementsByTagName('nav');

  // convertes the query selector into an array instead of HTML collection (allows use of some())
  const navLinks = [].slice.call(document.getElementsByClassName('links'));

  const hamburger = document.getElementById('hamburger');
  const hamburgerClicked = hamburger.contains(e.target);
  const navLinkClicked = navLinks.some((link) => link.contains(e.target));

  if (!hamburgerClicked && navbarIsOpen && !nav[0].contains(e.target)) {
    toggleNavbar();
  } else if (navLinkClicked) {
    toggleNavbar();
  }
});

export default Navbar;
