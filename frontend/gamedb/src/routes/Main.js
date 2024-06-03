
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Main.scss'; // import the CSS file
import GameTiles from '../components/GameTiles';

function Main() {
  return (
    <div>
      <Header />
      <main className="homepage">
        <h2 className="title">Welcome to GameDB</h2>
        <p className="description">Bored of the current games you are playing? Are you stuck on trying to figure out which game you want to play next? Fret no more! Choose from a genre from the dropdown menu below, it will display the most popular games being played today!</p>
        <label htmlFor="genre" className="genre-label">Genre</label>
        <select id="genre" className="genre-select">
          <option value="">Select a genre</option>
          <option value="action">Action</option>
          <option value="adventure">Adventure</option>
          <option value="rpg">RPG</option>
          {/* Add more options as needed */}
        </select>
        <GameTiles />
      </main>
      <Footer />
    </div>
  );
}

export default Main;