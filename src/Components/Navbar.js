import React from 'react';
import { NavLink } from 'react-router-dom';
import { toggleLogin } from '../Pages/LoginPage';
import { toggleSignup } from '../Pages/SignupPage';
import '../Styles/navbar.scss';

export const toggle = () => {
  const nav = document.getElementsByTagName('nav');
  nav[0].classList.toggle('invisible');
};

const Navbar = () => {
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
      <div className="hamburger" role="presentation" onClick={toggle}>
        <div className="slice" />

        <div className="slice" />

        <div className="slice" />
      </div>
      <nav>
        <ul className="links">
          {links.map((link) => (
            <li key={link.id} className="linkLi">
              <NavLink
                to={link.path}
                className={(navData) => (navData.isActive ? 'active' : 'link')}
              >
                {link.text}
              </NavLink>
            </li>
          ))}
          <li>
            <p role="presentation" onClick={toggleLogin}>Log in</p>
          </li>
          <li>
            <p role="presentation" onClick={toggleSignup}>Sign up</p>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
