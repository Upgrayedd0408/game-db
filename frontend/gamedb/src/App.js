import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Login from './components/Login';
import Register from './components/Register';
import Wishlist from './components/Wishlist';
import Genre from './components/Genre'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/genre/:genre" element={<Genre />} /> {/* This will be dynamic */}
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;