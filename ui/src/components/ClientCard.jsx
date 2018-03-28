import React from 'react';


const ClientCard = ({ client: { name, surname, id } }) => {
  return (
    <ul className='client-card'>
      <li>{id}</li>
      <li>{name}</li>
      <li>{surname}</li>
    </ul>
  );
};

export default ClientCard;