import React from 'react';


const ClientList = ({ clients }) => {  
  return (
    <ul className='client-list'>
      {
        clients.map((cl, index) => (
          <li key={index}>{cl.name}</li>  
        ))
      }      
    </ul>
  );
};

export default ClientList;