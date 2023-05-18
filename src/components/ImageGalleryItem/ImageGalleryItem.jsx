import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ pageURL, webformatURL, tags, onClick }) => {
  return (
    <li key={pageURL} className={css.imageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        onClick={onClick}
        className={css.imageGalleryItemImage}
      />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  pageURL: PropTypes.string.isRequired,
};
