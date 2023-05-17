import React from 'react';

const ImageGalleryItem = ({ pageURL, webformatURL, tags }) => {
  return (
    <div>
      <li key={pageURL} className="gallery-item">
        <img src={webformatURL} alt={tags} />
      </li>
    </div>
  );
};

export default ImageGalleryItem;
