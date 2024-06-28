import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand text-primary" to="/">My Inventory App</Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link text-info" to="/login">Sign In</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-info" to="/register">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
