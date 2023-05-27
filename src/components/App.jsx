import { useState, useEffect } from 'react';

import ImageGallery from './ImageGallery/ImageGallery';
import fetchImages from '../api/api';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import css from './App.module.css';

import React from 'react';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState({});
  const [isActive, setIsActive] = useState(false);
  const [totalHits, setTotalHits] = useState(0);
  // console.log(totalHits);

  useEffect(() => {
    if (searchText === '') return;
    async function getImages() {
      try {
        setIsLoading(true);
        await fetchImages(searchText, page).then(data => {
          if (data.hits.length === 0) {
            setIsLoading(false);
            alert(`Nothing found for "${searchText}"`);
            return;
          }
          setImages(state => [...state, ...data.hits]);
          setIsLoading(false);
          setTotalHits(data.totalHits);
        });
      } catch (error) {
        setIsLoading(false);
      }
    }
    getImages();
  }, [page, searchText]);

  useEffect(() => {
    if (images.length === 0) setIsActive(false);
    if (images.length !== 0) setIsActive(true);
    if (images.length === totalHits) setIsActive(false);
  }, [images, totalHits]);

  // async componentDidUpdate(_, prevState) {
  //   if (
  //     prevState.searchText !== this.state.searchText ||
  //     prevState.page !== this.state.page
  //   ) {
  //     const { searchText, page, images } = this.state;
  //     this.setState({ isLoading: true });
  //     try {
  //       const data = await fetchImages(searchText, page);

  //       if (images.length + 12 <= data.totalHits || data.hits.length === 0) {
  //         this.setState({ isActive: true });
  //       } else {
  //         this.setState({ isActive: false });
  //       }
  //       if (data.hits.length === 0) {
  //         this.setState({ isLoading: false });
  //       }

  //       const searchedImages = data.hits;
  //       this.setState(prevState => ({
  //         images: [...prevState.images, ...searchedImages],
  //         isLoading: false,
  //       }));
  //     } catch (error) {
  //       this.setState({ error });
  //     }
  //   }
  // }

  const loadMoreBtn = () => {
    setPage(prevState => prevState + 1);
  };

  const hendleSearch = searchText => {
    setSearchText(searchText);
    setPage(1);
    setImages([]);
  };

  // const hendleSearch = searchText => {
  //   this.setState({ searchText, page: 1, images: [] });
  // };

  const handleOpenModal = image => {
    const largeImage = { url: image.largeImageURL, alt: image.tags };
    setLargeImage(largeImage);
    setShowModal(true);
  };

  // const handleOpenModal = image => {
  //   const largeImage = { url: image.largeImageURL, alt: image.tags };
  //   this.setState({ largeImage, showModal: true });
  // };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  //  const handleCloseModal = () => {
  //    this.setState({ showModal: false });
  //  };

  return (
    <div className={css.app}>
      <Searchbar hendleSearch={hendleSearch} />
      {isLoading && <Loader />}
      <ImageGallery images={images} onClick={handleOpenModal} />
      {isActive && <Button onClick={loadMoreBtn} />}
      {showModal && <Modal image={largeImage} onClose={handleCloseModal} />}
    </div>
  );
};

export default App;

