import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Game() {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchGame = async () => {
      const response = await fetch(`/api/games/${id}`);
      const data = await response.json();
      setGame(data.game);
    };
    fetchGame();
  }, [id]);

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{game.name}</h2>
      <p>{game.description}</p>
      {/* Render other game data as needed */}
    </div>
  );
}

export default Game;