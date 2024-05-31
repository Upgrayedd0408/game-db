import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

function Header() {
  return (
    <header className="header">
      <h1 className="logo">GameDB</h1>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/register" className="register-button">Register</Link> {/* Add this line */}
        <Link to="/login" className="login-button">Login</Link>
      </nav>
    </header>
  );
}

export default Header;