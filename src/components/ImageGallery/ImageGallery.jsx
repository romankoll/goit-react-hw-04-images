import { Component } from 'react';
import fetchImages from '../../api/api';

class ImageGallery extends Component {
  state = { images: [], error: '' };

  async componentDidUpdate(prevProps) {
    if (prevProps.searchText !== this.props.searchText) {
      try {
        const { hits } = await fetchImages(this.props.searchText);
        this.setState({ images: hits });
      } catch (error) {
        this.setState({ error });
      }
    }
  }

  // 1 метод без async дивитись api,js
  //       componentDidUpdate(prevProps) {
  // if (prevProps.searchText !== this.props.searchText) {
  //        fetchImages(this.props.searchText).then(data =>
  //     this.setState({ images: data.hits })
  //   );}

  render() {
    const { error, images } = this.state;
    return (
      <>
        {error && <div>{error}</div>}

        {images.length > 0 && (
          <ul className="gallery">
            {images.map(image => (
              <li key={image.pageURL} className="gallery-item">
                <img src={image.webformatURL} alt={image.tags} />
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default ImageGallery;
