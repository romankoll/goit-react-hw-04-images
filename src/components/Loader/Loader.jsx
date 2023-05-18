import React from 'react';
import { Audio } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Audio
      className="loader"
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ margin: '0 auto' }}
    />
  );
};

export default Loader;
