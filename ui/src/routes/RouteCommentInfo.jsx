import React from 'react';
import { withRouter } from 'react-router-dom';

import CommentCardWithData from '../containers/CommentCardWithData';


const RouteCommentInfo = () => {
  return (
    <div>
      <CommentCardWithData/>
    </div>
  );
};

export default withRouter(RouteCommentInfo);