import React, { useState, useEffect } from 'react';
import ReviewsListItem from './ReviewsListItem';
import '../styles/ReviewsList.scss';
import Popup from 'reactjs-popup';


const ReviewsList = (props) => {
  const { reviews, displayRating } = props;

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  // };

  if (reviews !== null) {
    const listAllReviews = reviews.map((review) => (
      <ReviewsListItem key={review.id} review={review} displayRating={displayRating} />
    ));

    return <div className="reviews">{listAllReviews}</div>;
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

/* const PhotoList = (props) => {
  const { isFavouritePhoto, addFavouritePhoto, displayPhotoModal, isInModal } = props;
  const { photos } = props;


  const listOfPhotos = photos.map((photo) =>
    <PhotoListItem
      key={photo.id}
      photo={photo}
      isInModal={isInModal}
      isFavouritePhoto={isFavouritePhoto || false}
      toggleFavourite={() => addFavouritePhoto(photo.id)}
      displayPhotoModal={displayPhotoModal}
    />);

  return (
    <ul className="photo-list">
      {listOfPhotos}
    </ul>
  );
};

export default PhotoList; */