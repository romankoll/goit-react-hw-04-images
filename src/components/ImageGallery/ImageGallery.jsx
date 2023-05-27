// import Button from 'components/Button/Button';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

import React from 'react';

const ImageGallery = ({ onClick, images }) => {
  const onItemClick = image => {
    onClick(image);
  };

  return (
    <>
      {images.length > 0 && (
        <ul className={css.imageGallery}>
          {images.map(image => (
            <ImageGalleryItem
              onClick={() => onItemClick(image)}
              key={image.pageURL}
              pageURL={image.pageURL}
              webformatURL={image.webformatURL}
              tags={image.tags}
            />
          ))}
        </ul>
      )}
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
