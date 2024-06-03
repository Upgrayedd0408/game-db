import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

function Header() {
  return (
    <header className="header">
      <img src="/logo.png" alt="GameDB Logo" className="logo" />
      <nav className="nav">
        <Link to="/" className="home-button">Home</Link>
        <Link to="/wishlist" className="wishlist-button">Wishlist</Link>
        <Link to="/register" className="register-button">Register</Link>
        <Link to="/login" className="login-button">Login</Link>
      </nav>
    </header>
  );
}

export default Header;