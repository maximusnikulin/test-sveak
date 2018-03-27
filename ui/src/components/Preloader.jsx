import React from 'react';

const Preloader = ({ show, children }) => (
  show ? <p>...Loading</p> : React.Children.toArray(children)
);

export default Preloader;