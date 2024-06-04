import React from 'react';
import Header from '../components/Header'; // import the Header component
import Footer from '../components/Footer'; // import the Footer component
import '../styles/Register.scss';
function Register() {
  return (
    <div className="register">
      <Header />
      <h2 className="register-header">Register</h2>
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