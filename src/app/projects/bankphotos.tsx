import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PhotoGallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const photos = [
    {
      url: 'https://via.placeholder.com/800x400?text=Photo+1',
      alt: 'Photo 1',
    },
    {
      url: 'https://via.placeholder.com/800x400?text=Photo+2',
      alt: 'Photo 2',
    },
    {
      url: 'https://via.placeholder.com/800x400?text=Photo+3',
      alt: 'Photo 3',
    },
  ];

  return (
    <div className="photo-gallery">
      <Slider {...settings}>
        {photos.map((photo, index) => (
          <div key={index}>
            <img src={photo.url} alt={photo.alt} className="w-full h-auto" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PhotoGallery;
