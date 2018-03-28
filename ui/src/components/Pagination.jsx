import React from 'react';
import { Link } from 'react-router-dom';


const Pagination = ({
  links,  
  children
}) => {
  return (
    <div className='pagination'>
      <div className='pagination__header'>
        {
          links.map((val, index) => (
            <Link to={`?p=${val}`} key={index}>{val}</Link>
          ))
        }
      </div>
      <div className='pagination__content'>
        {React.Children.only(children)}
      </div>
    </div>   
  );
};

export default Pagination;