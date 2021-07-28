import React from 'react';
import PropTypes from 'prop-types';

importStylefrom './ImageGalleryItem.module.css';
i

const ImageGalleryItem = () => {
  return (
    <contextProps.Consumer>
      {({ images, onOpenModal }) => {
        return images.map(({ id, webformatURL, tags, largeImageURL }) => (
          <li key={id} onClick={onOpenModal} className={Style.ImageGalleryItem}>
            <img
              src={webformatURL}
              alt={tags}
              data-source={largeImageURL}
              className={Style.ImageGalleryItemImage}
            />
          </li>
        ));
      }}
    </contextProps.Consumer>
  );
};
ImageGalleryItem.propTypes = {
  onOpenModal: PropTypes.func
};
export default ImageGalleryItem;
