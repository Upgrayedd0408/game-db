import React from 'react'
import "../styles/ReviewsListItem.scss"


const ReviewsListItem = (props) => {
  const { username, rating, message } = props.review;
  const { displayRating } = props;

  return (
    <div className="reviews-list_item">
        <p>{username}</p>
        <p>{displayRating(rating)}</p>
        <p>{message}</p>
    </div>

  );



}



export default ReviewsListItem;