import React from 'react';
import { Link } from 'react-router-dom';

export default ({
  comments
}) => {
  return (
    <ul>      
      {
        comments.map((comment) => (
          <li key={comment.id}>            
            <Link to={`/comments/${comment.id}`}>              
              {comment.text.slice(0, 20) + '...'}              
            </Link>
          </li>
        ))
      }
    </ul>
  );
};