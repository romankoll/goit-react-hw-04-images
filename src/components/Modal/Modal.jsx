import { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

import React from 'react';

const Modal = ({ onClose, image }) => {
  const handleClick = useCallback(
    evt => {
      if (evt.code === 'Escape') onClose();
    },
    [onClose]
  );
  // const handleClick = evt => {
  //   if (evt.code === 'Escape') onClose();
  // };

  useEffect(() => {
    window.addEventListener('keydown', handleClick);

    return () => {
      window.removeEventListener('keydown', handleClick);
    };
  }, [handleClick]);

  //   componentDidMount() {
  //   window.addEventListener('keydown', this.handleClick);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.handleClick);
  // }

  const onBackdropClickClose = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <div className={css.overlay} onClick={onBackdropClickClose}>
      <div className={css.modal}>
        <img src={image.url} alt={image.alt} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};
export default Modal;
