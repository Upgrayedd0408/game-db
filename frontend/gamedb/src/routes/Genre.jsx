import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Genre.scss';

function Genre() {
  const [genre, setGenre] = useState(null);
  const [games, setGames] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/genres/${id}`)
      .then(response => response.json())
      .then(data => setGenre(data));

    Promise.all([
      fetch(`/api/genres/${id}/games`).then(response => response.json()),
      fetch('/api/wishlist').then(response => response.json()),
    ])
    .then(([gamesData, wishlistData]) => {
      gamesData = gamesData.map(game => ({
        ...game,
        isInWishlist: wishlistData.some(wishlistItem => wishlistItem.id === game.id),
      }));
      setGames(gamesData);
    });
  }, [id]);

  const addToWishlist = (game) => {
    const method = game.isInWishlist ? 'DELETE' : 'POST';
    const url = game.isInWishlist ? `/api/wishlist/${game.id}` : '/api/wishlist';

    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ wishlistId: 1, gameId: game.id }),
    })
    .then(response => response.json())
    .then(data => {
      setGames(games.map(g => g.id === game.id ? { ...g, isInWishlist: !g.isInWishlist } : g));
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  if (!genre) {
    return <div>Loading...</div>;
  }

  return (
    <div className="genre">
      <Header />
      <h2 className="genre-title">Genre: {genre.category}</h2>
      <table className="genre-table">
        <thead>
          <tr>
            <th>Game Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {games.map(game => (
            <tr key={game.id}>
              <td>
                <Link to={`/games/${game.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                  {game.name}
                </Link>
              </td>
              <td>
                <button onClick={() => addToWishlist(game)}>
                  {game.isInWishlist ? 'Remove From Wishlist' : 'Add To Wishlist'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
}

export default Genre;
