import React from 'react';
importStylefrom './Container.module.css';

const Container = ({ children }) => (
  <div className={Style.container}>{children}</div>
);

export default Container;
