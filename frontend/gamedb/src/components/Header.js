
import React from 'react';
import { Link } from 'react-router-dom'; // import the Link component
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="logo">GameDB</h1>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/login" className="login-button">Login</Link> {/* Update this line */}
      </nav>
    </header>
  );
}

export default Header;