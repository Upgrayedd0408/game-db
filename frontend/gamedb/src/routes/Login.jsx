import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Login.scss';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post('/api/users/login', { username, password });
      if (response.status === 200) {
        // Store the token and username
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('username', username);
        window.location.href = '/';
      }
    } catch (error) {
      setErrorMessage('Incorrect Username or Password');
    }
  };

  return (
    <>
    <div className="login">
      <Header />
      <h2 className="login-header">Login</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Login</button>
      </form>
    </div>
    <Footer />
    </>
  );
}

export default Login;