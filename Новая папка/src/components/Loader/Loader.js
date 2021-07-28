import React from 'react';
import Loader from 'react-loader-spinner';

importStylefrom './Loader.module.css';

const LoaderOn = () => {
  return (
    <div className={Style.Loader}>
      <Loader type="Audio" color="#00BFFF" height={150} width={150} />
    </div>
  );
};

export default LoaderOn;
