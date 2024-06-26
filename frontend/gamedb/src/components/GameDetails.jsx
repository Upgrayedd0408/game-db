import React from "react";
import "../styles/Games.scss";

const GameDetails = (props) => {
  const { game, displayRating, id } = props;
  const rating = game[0].rating;
  

  return (
    <div className="games">
      <span className="game-name">{game[0].name}</span>
      <div className="information">
        <div className="specifics">
          <article>{game[0].description}</article>
          {game[0].controller_support ? (
            <p>Controller Support: ✅</p>
          ) : (
            <p>Controller Support: ❌</p>
          )}
          {game[0].is_on_sale ? (
            <p>Currently on sale: ✅</p>
          ) : (
            <p>Currently on sale: ❌</p>
          )}
          <p>Supported Languages: {game[0].language}</p>
          <p>Supported Systems: {game[0].system_name}</p>
          <p>Genre: {game[0].category}</p>
          {displayRating(rating)}
          
          
        </div>
        <iframe
          width="560"
          height="315"
          src={game[0].trailer_url}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default GameDetails;
