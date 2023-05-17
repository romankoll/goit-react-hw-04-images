import React from 'react';

const Button = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className="">
      Load More
    </button>
  );
};

export default Button;
