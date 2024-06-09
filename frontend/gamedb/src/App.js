import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './routes/Main';
import Login from './routes/Login';
import Register from './routes/Register';
import Wishlist from './routes/Wishlist';
import Genre from './routes/Genre'; 
import Game from './routes/Game';
import './global.scss';

function App() {
  
  
  const displayRating = (rating) => {
    // const rating = game[0].rating;

    if (rating < 1) {
      return (
        <p>
          Rating: <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
        </p>
      );
    } else if (rating === 1) {
      return (
        <p>
          Rating: <i class="fa-solid fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
        </p>
      );
    } else if (rating === 2) {
      return (
        <p>
          Rating: <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
        </p>
      );
    } else if (rating === 3) {
      return (
        <p>
          Rating: <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
        </p>
      );
    } else if (rating === 4) {
      return (
        <p>
          Rating: <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-regular fa-star"></i>
        </p>
      );
    } else if (rating === 5)
      return (
        <>
          <p>
            Rating:
            <>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </>
          </p>
        </>
      );
  };

  return (
    <Router>
      <Routes>
        <Route path="/games/:id" element={<Game displayRating={displayRating} />} /> {/* This will be dynamic */}
        <Route path="/genre/:id" element={<Genre />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;