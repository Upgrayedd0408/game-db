import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Main.scss'; // import the CSS file

function Main() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch('/api/genres')
      .then(response => response.json())
      .then(data => setGenres(data));
  }, []);

  return (
    <div>
      <Header />
      <main className="homepage">
        <h2 className="title">Welcome to GameDB</h2>
        <p className="description">Bored of the current games you are playing? Are you stuck on trying to figure out which game you want to play next? Fret no more! Choose from a genre from the dropdown menu below, it will display the most popular games being played today!</p>
        <label htmlFor="genre" className="genre-label">Genre</label>
        <select id="genre" className="genre-select" onChange={e => window.location = `/genre/${e.target.value}`}>
  <option value="">Select a genre</option>
  {genres.map(genre => (
    <option key={genre.id} value={genre.id}>{genre.category}</option>
  ))}
</select>
      </main>
      <Footer />
    </div>
  );
}

export default Main;