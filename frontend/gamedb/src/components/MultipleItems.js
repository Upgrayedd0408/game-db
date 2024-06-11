import React from 'react';
import Slider from "react-slick";
import ReviewsListItem from './ReviewsListItem';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MultipleItems(props) {
  const { reviews, displayRating } = props;
  
  const listAllReviews = reviews.map((review) => (
    <ReviewsListItem key={review.id} review={review} displayRating={displayRating} />
  ));
  
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  

  };
  return (
    <div className="slider-container">
    <Slider {...settings}>
      {listAllReviews}
    </Slider>
  </div>
  )
}


export default MultipleItems;