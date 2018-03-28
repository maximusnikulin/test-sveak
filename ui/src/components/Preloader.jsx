import React from 'react';


export default ({ show, children }) => (
  show ? <p>...Loading</p> : React.Children.toArray(children)
);