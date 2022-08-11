import React from 'react';
import { NavLink } from 'react-router-dom';

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
      </ul>
    </nav>
  );
};

export default Navbar;
