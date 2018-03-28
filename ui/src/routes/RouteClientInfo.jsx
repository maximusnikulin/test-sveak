import React from 'react';

import ClientCardWithData from '../containers/ClientCardWithData';
import CommentListWithDataPagination from '../containers/CommentListWithDataPagination';


export default () => {
  return(
    <div>
      <ClientCardWithData/>
      <CommentListWithDataPagination/>
    </div>
  );
};