import React from 'react';

function Tile({ image }) {
  return (
    <div className="tile">
      <img src={image} alt="Game" />
    </div>
  );
}

export default Tile;