import React from 'react';
import Header from './Header'; // import the Header component
import Footer from './Footer'; // import the Footer component
import '../styles/Register.css'; // You'll need to create this file

function Register() {
  return (
    <div className="register">
      <Header />
      <h2 className="register-title">Register</h2>
      <form className="register-form">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" />

        <label htmlFor="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" />

        <button type="submit">Register</button>
      </form>
      <Footer />
    </div>
  );
}

export default Register;