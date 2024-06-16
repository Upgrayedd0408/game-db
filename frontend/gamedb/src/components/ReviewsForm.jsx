import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarHandler from "./StarHandler";
import "../styles/ReviewsForm.scss";
import axios from 'axios';

function ReviewsForm(props) {
  const [inputs, setInputs] = useState({});
  const [textarea, setTextarea] = useState("Please enter your review here");
  const [rating, setRating] = useState(0);
  const username = localStorage.getItem('username');
  const { id } = props

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleTextAreaChange = (event) => {
    setTextarea(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post(`http://localhost:8080/reviews/${id}`, { username, textarea, rating });
      if (response.status === 200) {
        // Store the token and username
        alert('Review submitted successfully!');
        window.location.reload();
      }
    } catch (error) {
      console.error("Reviews Form Line 32: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="username">
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            placeholder={username}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="star-rating">
        <label>
          Rating: <StarHandler rating={rating} setRating={setRating} />
        </label>
      </div>
      <div className="review-message">
        <textarea value={textarea} onChange={handleTextAreaChange} />
      </div>
        <input type="submit" />
    </form>
  );
}

export default ReviewsForm;
