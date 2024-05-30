// Main.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Main.css'; // import the CSS file

function Main() {
  return (
    <div>
      <Header />
      <main className="homepage">
        <h2 className="title">Welcome to GameDB</h2>
        <p>GameDB is a collection of games that you can search, view, and add to.</p>
        <label htmlFor="genre" className="genre-label">Genre</label>
        <select id="genre" className="genre-select">
          <option value="">Select a genre</option>
          <option value="action">Action</option>
          <option value="adventure">Adventure</option>
          <option value="rpg">RPG</option>
          {/* Add more options as needed */}
        </select>
      </main>
      <Footer />
    </div>
  );
}

export default Main;