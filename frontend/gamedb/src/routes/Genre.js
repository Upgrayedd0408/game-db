import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

    fetch(`/api/genres/${id}/games`)
      .then(response => response.json())
      .then(data => setGames(data));
  }, [id]);

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
            <th>Game Title</th>
          </tr>
        </thead>
        <tbody>
          {games.map(game => (
            <tr key={game.id}>
              <td>{game.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
}

export default Genre;