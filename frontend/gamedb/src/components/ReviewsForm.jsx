import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarHandler from "./StarHandler";
import "../styles/ReviewsForm.scss"

function ReviewsForm() {
  const [inputs, setInputs] = useState({});
  const [textarea, setTextarea] = useState("Please enter your review here");
  const [rating, setRating] = useState(0);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleTextAreaChange = (event) => {
    setTextarea(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="username">
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={inputs.username || ""}
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
      <div className="submit">
        <input type="submit" />
      </div>
    </form>
  );
}

export default ReviewsForm;
