import React, { useState, useEffect } from 'react';
import ReviewsListItem from './ReviewsListItem';
import '../styles/ReviewsList.scss';
import Popup from 'reactjs-popup';
import MultipleItems from './MultipleItems';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewsForm from './ReviewsForm';


const ReviewsList = (props) => {
  const { reviews, displayRating, id } = props;

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  // };

  if (reviews !== null) { 
    return (
      <div>
        <div className="new-review">
        <Popup trigger={<button>Leave a Review</button>} modal nested>
          {(close) => (
            <div className="modal">
              <div className="content">
                <p>Leave a Review!</p>
                <ReviewsForm id={id} />
              </div>
            <div className="cancel-button">
              <button onClick={() => close()}>Cancel</button>
            </div>
            </div>
          )}
        </Popup>
        </div>
        <MultipleItems reviews={reviews} displayRating={displayRating} />
      </div>
    );
  } else {
    return (
      <div className="no-reviews">
        <p>No Reviews Found. Be the first to leave a review!</p>
        <Popup trigger={<button>Leave a Review</button>} modal nested>
          {(close) => (
            <div className="modal">
              <div className="content">
                <ReviewsForm />
              </div>
              <div className="cancel-button">
                <button onClick={() => close()}>Cancel</button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    );
  }
};



export default ReviewsList;
