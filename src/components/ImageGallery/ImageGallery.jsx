import Button from 'components/Button/Button';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import fetchImages from '../../api/api';

class ImageGallery extends Component {
  state = {
    images: [],
    error: null,
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchText !== this.props.searchText) {
      // try {
      const { hits } = await fetchImages(this.props.searchText, 1);
      this.setState({ images: hits, error: null, page: 1 });
      // } catch (error) {
      //   this.setState({ error: 'oops... something go wrong try later' });
      // }
    }

    if (prevState.page !== this.state.page) {
      // try {
      const { hits } = await fetchImages(
        this.props.searchText,
        this.state.page
      );
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        error: null,
      }));
      // } catch (error) {
      //   this.setState({ error: 'oops... something go wrong try later' });
      // }
    }
  }

  loadMoreBtn = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  // 1 метод без async дивитись api,js
  //       componentDidUpdate(prevProps) {
  // if (prevProps.searchText !== this.props.searchText) {
  //        fetchImages(this.props.searchText).then(data =>
  //     this.setState({ images: data.hits })
  //   );}

  render() {
    const {
      images,
      // error
    } = this.state;
    return (
      <>
        {/* {error && <div>{error}</div>} */}
        {images.length > 0 && (
          <div>
            <ul className="gallery">
              {images.map(image => (
                <ImageGalleryItem
                  key={image.pageURL}
                  pageURL={image.pageURL}
                  webformatURL={image.webformatURL}
                  tags={image.tags}
                />
              ))}
            </ul>
            <Button onClick={this.loadMoreBtn} />
          </div>
        )}
      </>
    );
  }
}

export default ImageGallery;
