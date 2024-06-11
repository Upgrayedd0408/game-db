import React, { useState, useEffect } from 'react';
import ReviewsListItem from './ReviewsListItem';
import '../styles/ReviewsList.scss';
import Popup from 'reactjs-popup';
import MultipleItems from './MultipleItems';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ReviewsList = (props) => {
  const { reviews, displayRating } = props;

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
                test
              </div>
            <div>
              <button onClick={() => close()}>Close modal</button>
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
                test
                {/* <form className="login-form" onSubmit={handleSubmit}>
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />

                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <button type="submit">Login</button>
                </form> */}
              </div>
              <div>
                <button onClick={() => close()}>Close modal</button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    );
  }
};



export default ReviewsList;
