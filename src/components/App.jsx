import { Component } from 'react';

import ImageGallery from './ImageGallery/ImageGallery';
import fetchImages from '../api/api';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import Loader from './Loader/Loader';

class App extends Component {
  state = {
    searchText: '',
    page: 1,
    images: [],
    isLoading: false,
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.searchText !== this.state.searchText ||
      prevState.page !== this.state.page
    ) {
      const { searchText, page, images } = this.state;
      this.setState({ isLoading: true });
      try {
        await fetchImages(searchText, page).then(data => {
          if (data.hits.length === 0) {
            this.setState({ isLoading: false, isActive: false });
            return Promise.reject(
              new Error(`Nothing found for "${searchText}"`)
            );
          }
          if (images.length + 12 <= data.totalHits) {
            this.setState({ isActive: true });
          } else {
            this.setState({ isActive: false });
          }
          const searchedImages = data.hits;
          this.setState(prevState => ({
            images: [...prevState.images, ...searchedImages],
            isLoading: false,
          }));
        });
      } catch (error) {
        this.setState({ isLoading: false, error });
        // toast.error(`${error.message}`, {
        //   position: 'top-center',
        //   autoClose: 2000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: 'colored',
        // }
        // );
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

  render() {
    const { searchText, images, isLoading } = this.state;
    return (
      <div>
        <Searchbar hendleSearch={this.hendleSearch} />
        {isLoading && <Loader />}
        <ImageGallery images={images} />
        {images.length > 0 && <Button onClick={this.loadMoreBtn} />}
      </div>
    );
  }
}

export default App;
