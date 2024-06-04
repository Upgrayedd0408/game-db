import React from 'react';
import Header from '../components/Header'; // import the Header component
import Footer from '../components/Footer'; // import the Footer component
import '../styles/Login.scss';

function Login() {
  return (
    <div className="login">
      <Header /> 
      <h2 className="login-header">Login</h2>
      <form className="login-form">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" />

        <button type="submit">Login</button>
      </form>
      <Footer /> 
    </div>
  );
}

export default Login;