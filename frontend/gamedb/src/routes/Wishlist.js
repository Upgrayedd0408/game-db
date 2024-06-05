import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Wishlist.scss';

function Wishlist() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('/api/games')
  .then(response => response.text())  // get the response text
  .then(text => {
    console.log(text);  // log the response text
    return JSON.parse(text);  // parse the text as JSON
  })
  .then(data => setGames(data));
  }, []);

  return (
    <div className="wishlist">
      <Header />
      <h2 className="wishlist-header">Wishlist</h2>
      <table className="wishlist-table">
        <thead>
          <tr>
            <th>Game</th>
            <th>Genre</th>
            <th>Store URL</th>
          </tr>
        </thead>
        <tbody>
          {games.map(game => (
            <tr key={game.id}>
              <td>{game.name}</td>
              <td>{game.genre}</td>
              <td><a href={game.store_url}>Link</a></td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
}

export default Wishlist;