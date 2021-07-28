import React from "react";
import ImageGalleryItem from "../imageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ options }) => {
  return (
    <ul className="ImageGallery">
      {options.map((data) => (
        <ImageGalleryItem
          id={data.id}
          defSizePhoto={data.webformatURL}
          largeSizePhoto={data.largeImageURL}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
