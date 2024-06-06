import React from 'react'
import "../styles/ReviewsListItem.scss"


const ReviewsListItem = (props) => {
  const { username, rating, message } = props.review;


  return (
    <div className="reviews-list_item">
      <p>{username}</p>
      <p>{rating}</p>
      <p>{message}</p>
    </div>

  );



}



export default ReviewsListItem;