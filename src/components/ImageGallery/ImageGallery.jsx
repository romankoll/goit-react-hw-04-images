// import Button from 'components/Button/Button';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

import React from 'react';

const ImageGallery = ({ onClick, images }) => {
  const onItemClick = image => {
    onClick(image);
  };

  return (
    <>
      {images.length > 0 && (
        <ul className={css.imageGallery}>
          {images.map(image => (
            <ImageGalleryItem
              onClick={() => onItemClick(image)}
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
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;

// class ImageGallery extends Component {
//   // async componentDidUpdate(prevProps, prevState) {
//   //   if (prevProps.searchText !== this.props.searchText) {
//   //     // try {
//   //     this.setState({ isLoading: true });
//   //     const { hits } = await fetchImages(this.props.searchText, 1);
//   //     this.setState({ images: hits, error: null, page: 1, isLoading: false });
//   //     // } catch (error) {
//   //     //   this.setState({ error: 'oops... something go wrong try later' });
//   //     // } finally {
//   //     //   this.setState({ isLoading: false})
//   //     // }
//   //   }

//   //   if (prevState.page !== this.state.page) {
//   //     // try {
//   //     const { hits } = await fetchImages(
//   //       this.props.searchText,
//   //       this.state.page
//   //     );
//   //     this.setState(prevState => ({
//   //       images: [...prevState.images, ...hits],
//   //       error: null,
//   //     }));
//   //     // } catch (error) {
//   //     //   this.setState({ error: 'oops... something go wrong try later' });
//   //     // }
//   //   }
//   // }

//   // loadMoreBtn = () => {
//   //   this.setState(prevState => ({
//   //     page: prevState.page + 1,
//   //   }));
//   // };

//   // 1 метод без async дивитись api,js
//   //       componentDidUpdate(prevProps) {
//   // if (prevProps.searchText !== this.props.searchText) {
//   //        fetchImages(this.props.searchText).then(data =>
//   //     this.setState({ images: data.hits })
//   //   );}

//   onItemClick = image => {
//     this.props.onClick(image);
//   };
//   render() {
//     const images = this.props.images;

//     return (
//       <>
//         {images.length > 0 && (
//           <ul className={css.imageGallery}>
//             {images.map(image => (
//               <ImageGalleryItem
//                 onClick={() => this.onItemClick(image)}
//                 key={image.pageURL}
//                 pageURL={image.pageURL}
//                 webformatURL={image.webformatURL}
//                 tags={image.tags}
//               />
//             ))}
//           </ul>
//         )}
//       </>
//     );
//   }
// }

// ImageGallery.propTypes = {
//   images: PropTypes.array.isRequired,
//   onClick: PropTypes.func.isRequired,
// };

// export default ImageGallery;
