import { Component } from 'react';

import ImageGallery from './ImageGallery/ImageGallery';
import fetchImages from '../api/api';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import css from './App.module.css';

class App extends Component {
  state = {
    searchText: '',
    page: 1,
    images: [],
    isLoading: false,
    showModal: false,
    largeImage: {},
    isActive: false,
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.searchText !== this.state.searchText ||
      prevState.page !== this.state.page
    ) {
      const { searchText, page, images } = this.state;
      this.setState({ isLoading: true });
      try {
        const data = await fetchImages(searchText, page);

        if (images.length + 12 <= data.totalHits || data.hits.length === 0) {
          this.setState({ isActive: true });
        } else {
          this.setState({ isActive: false });
        }
        if (data.hits.length === 0) {
          this.setState({ isLoading: false });
        }

        const searchedImages = data.hits;
        this.setState(prevState => ({
          images: [...prevState.images, ...searchedImages],
          isLoading: false,
        }));
      } catch (error) {
        this.setState({ error });
      }
    }
  }

  loadMoreBtn = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  hendleSearch = searchText => {
    this.setState({ searchText, page: 1, images: [] });
  };

  handleOpenModal = image => {
    const largeImage = { url: image.largeImageURL, alt: image.tags };
    this.setState({ largeImage, showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { images, isLoading, showModal, isActive } = this.state;
    return (
      <div className={css.app}>
        <Searchbar hendleSearch={this.hendleSearch} />
        {isLoading && <Loader />}
        <ImageGallery images={images} onClick={this.handleOpenModal} />
        {isActive && <Button onClick={this.loadMoreBtn} />}
        {showModal && (
          <Modal
            image={this.state.largeImage}
            onClose={this.handleCloseModal}
          />
        )}
      </div>
    );
  }
}

export default App;
