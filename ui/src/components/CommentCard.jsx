import React from 'react';
import { Link } from 'react-router-dom';

export default ({
  comment
}) => {    
  const { id, text, author, clientId, type, date } = comment;  
  return(
    <ul>
      <li>{id}</li>
      <li>{text}</li>
      <li>{author}</li>
      <li>
        <Link to={`/clients/${clientId}`}>to Client</Link>
      </li>
    </ul>
  );
};