import React from 'react';

importStylefrom './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery = () => {
  return (
    <ul className={Style.ImageGallery} id="imagesList">
      <ImageGalleryItem />
    </ul>
  );
};

export default ImageGallery;
