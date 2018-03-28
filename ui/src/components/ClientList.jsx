import React from 'react';
import { Link } from 'react-router-dom';


export default ({ clients }) => {  
  return (
    <ul className='client-list'>
      {
        clients.map((cl) => (
          <Link to={`/clients/${cl.id}`} key={cl.id}>{cl.name}</Link>  
        ))
      }      
    </ul>
  );
};