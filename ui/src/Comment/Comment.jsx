import React from 'react';

import './style.css';

const Comment = ({
  text,
  author,
  date,
  type
}) => {
  return (
    <div className='comment'>
      <div className='comment__content'>
        <div className='comment__column comment__column_text'>{text}</div>
        <div className='comment__column comment__column_date'>{date}</div>
        <div className='comment__column comment__column_author'>{author}</div>
      </div>
      <div className='comment__service'>
        <button className='comment__button'>EDIT</button>
        <button className='comment__button'>DELETE</button>
      </div>
    </div>
  );
};

export default Comment;