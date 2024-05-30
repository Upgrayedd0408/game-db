// Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="logo">GameDB</h1>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/wishlist">Wishlist</a>
        <button className="login-button">Login</button>
      </nav>
    </header>
  );
}

export default Header;