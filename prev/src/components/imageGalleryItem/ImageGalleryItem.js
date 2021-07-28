import React, { Fragment } from "react";
const ImageGalleryItem = ({ defSizePhoto, id, largeSizePhoto }) => {
  return (
    <Fragment>
      <li className="ImageGalleryItem" key={id}>
        <img
          src={defSizePhoto}
          alt=""
          className="ImageGalleryItem-image"
          width="200"
          height="200"
        />
      </li>
    </Fragment>
  );
};

export default ImageGalleryItem;
