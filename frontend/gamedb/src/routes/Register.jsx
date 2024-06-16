import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Register.scss';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
  
    try {
      const response = await axios.post('/api/users/register', { username, password });
      if (response.status === 201) {
        window.location.href = '/login';
      }
    } catch (error) {
      if (error.response && error.response.data.error) {
        setErrorMessage(error.response.data.error);
      } else {
        console.error('Error registering user', error);
      }
    }
  };

  return (
    <div className="register">
      <Header />
      <h2 className="register-header">Register</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <label htmlFor="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

        <button type="submit">Register</button>
      </form>
      <Footer />
    </div>
  );
}

export default Register;