import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './routes/Main';
import Login from './routes/Login';
import Register from './routes/Register';
import Wishlist from './routes/Wishlist';
import Genre from './routes/Genre'; 
import Game from './routes/Game';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/games/:id" element={<Game />} /> {/* This will be dynamic */}
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