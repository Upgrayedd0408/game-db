import React from 'react';
import '../styles/GameTiles.scss';

const GameTiles = () => {
  const gameArts = ['../styles/Images/art1.png', '../styles/Images/art2.jpg', '../styles/Images/art2.png'];

  return (
    <div className="game-tiles">
      {gameArts.map((art, index) => (
        <div key={index} className="game-tile" style={{backgroundImage: `url(${art})`}}></div>
      ))}
    </div>
  );
}

export default GameTiles;