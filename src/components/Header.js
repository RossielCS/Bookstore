import React from 'react';
import user from '../assets/images/user.png';

const Header = () => (
  <div className="Header">
    <h1>Bookstore CMS</h1>
    <ul>
      <li className="li-header">BOOKS</li>
      <li className="li-header">CATEGORIES</li>
    </ul>
    <div>
      <img src={user} alt="user" />
    </div>
  </div>
);

export default Header;
