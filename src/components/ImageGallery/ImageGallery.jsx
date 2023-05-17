// import Button from 'components/Button/Button';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
// import fetchImages from '../../api/api';
// import { Audio } from 'react-loader-spinner';

class ImageGallery extends Component {
  state = {
    // images: [],
    error: '',
    page: 1,
    isLoading: false,
  };

  // async componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.searchText !== this.props.searchText) {
  //     // try {
  //     this.setState({ isLoading: true });
  //     const { hits } = await fetchImages(this.props.searchText, 1);
  //     this.setState({ images: hits, error: null, page: 1, isLoading: false });
  //     // } catch (error) {
  //     //   this.setState({ error: 'oops... something go wrong try later' });
  //     // } finally {
  //     //   this.setState({ isLoading: false})
  //     // }
  //   }

  //   if (prevState.page !== this.state.page) {
  //     // try {
  //     const { hits } = await fetchImages(
  //       this.props.searchText,
  //       this.state.page
  //     );
  //     this.setState(prevState => ({
  //       images: [...prevState.images, ...hits],
  //       error: null,
  //     }));
  //     // } catch (error) {
  //     //   this.setState({ error: 'oops... something go wrong try later' });
  //     // }
  //   }
  // }

  // loadMoreBtn = () => {
  //   this.setState(prevState => ({
  //     page: prevState.page + 1,
  //   }));
  // };

  // 1 метод без async дивитись api,js
  //       componentDidUpdate(prevProps) {
  // if (prevProps.searchText !== this.props.searchText) {
  //        fetchImages(this.props.searchText).then(data =>
  //     this.setState({ images: data.hits })
  //   );}

  render() {
    const images = this.props.images;

    return (
      <>
        {/* {error && <div>{error}</div>} */}

        {/* {isLoading && (
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        )} */}

        {images.length > 0 && (
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
        )}
      </>
    );
  }
}

export default ImageGallery;
