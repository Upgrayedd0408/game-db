import React, { useState, useEffect } from 'react';
import ReviewsListItem from './ReviewsListItem';
import '../styles/ReviewsList.scss';


const ReviewsList = (props) => {
  const { reviews } = props;

  const listAllReviews = reviews.map((review) =>
    <ReviewsListItem 
      key={review.id}
      review={review}
    />);

    return (
      <div className="reviews">
        {listAllReviews}
      </div>
    );
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