import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/Games.scss';

function Game() {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/games/${id}`)
    .then(res => {setGame(res.data)})
    .catch(err => console.log(err));
  }, [id]);


  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <div className='games'>
      <span className="title">{game[0].name}</span>
      <iframe width="560" height="315" src={game[0].trailer_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  );
}

export default Game;
