import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

function Header() {
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    window.location.href = "/login";
  };

  return (
    <header className="header">
      <img src="/logo.png" alt="GameDB Logo" className="logo" />
      <div className="username-message">{token && `Hello, ${username}`}</div>
      <nav className="nav">
        <Link to="/" className="nav-button home-button">Home</Link>
        {token ? (
          <>
            <Link to="/wishlist" className="nav-button wishlist-button">Wishlist</Link>
            <button onClick={handleLogout} className="nav-button logout-button">Logout</button>
          </>
        ) : (
          <>
            <Link to="/register" className="nav-button register-button">Register</Link>
            <Link to="/login" className="nav-button login-button">Login</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;