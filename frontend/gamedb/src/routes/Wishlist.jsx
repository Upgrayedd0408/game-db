import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Wishlist.scss';

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch('/api/wishlist')
      .then(response => response.json())
      .then(data => setWishlist(data));
  }, []);

  return (
    <>
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
          {wishlist.map(game => (
            <tr key={game.id}>
              <td>{game.name}</td>
              <td>{game.genre}</td>
              <td><a href={game.url}>Store Link</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Footer />
  </>
  );
}

export default Wishlist;