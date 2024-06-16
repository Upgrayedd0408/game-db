import React from 'react';
import '../styles/Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">GameDB</div>
      <div className="footer-right">
        <span>Created by </span> 
        <a href="https://github.com/Upgrayedd0408" target="_blank" rel="noopener noreferrer">Mike Lowry</a> 
        <span> and </span>
        <a href="https://github.com/NicholasTheisen" target="_blank" rel="noopener noreferrer">Nicholas Theisen</a>
      </div>
    </footer>
  );
}

export default Footer;