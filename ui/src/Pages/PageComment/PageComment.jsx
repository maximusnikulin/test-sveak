import React from 'react';

import CommentList from '../../Components/CommentList';


const PageComment = () => {
  return (
    <div className='page-comments'>
      <div className='page-comments__panel'>
        Add comment
      </div>
      <div className='page-comments__content'>
        <CommentList />
      </div>
    </div>
  );
};

export default PageComment;