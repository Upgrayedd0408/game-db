import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/Games.scss";
import Header from '../components/Header';
import GameDetails from "../components/GameDetails";
import ReviewsList from "../components/ReviewsList"
import Footer from "../components/Footer";

function Game() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/games/${id}`)
      .then((res) => {
        setGame(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/reviews/${id}`)
      .then((res) => {
        setReviews(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);


  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <GameDetails game={game} />
      <ReviewsList reviews={reviews} />
      <Footer />
    </div>
  );
}

export default Game;
