import React from 'react';
import Header from '../components/Header'; // import the Header component
import Footer from '../components/Footer'; // import the Footer component
import '../styles/Login.scss';

function Login() {
  return (
    <div className="login">
      <Header /> {/* Add this line */}
      <h2 className="login-title">Login</h2>
      <form className="login-form">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" />

        <button type="submit">Login</button>
      </form>
      <Footer /> {/* Add this line */}
    </div>
  );
}

export default Login;