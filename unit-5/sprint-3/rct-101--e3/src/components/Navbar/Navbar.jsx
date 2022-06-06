import React from "react";
import { Link } from "react-router-dom";

// use react-router Link or NavLink

const Navbar = () => {
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="/">home</Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}</span>
      <button data-cy="navbar-login-logout-button" >login</button>
    </div>
  );
};

export default Navbar;
