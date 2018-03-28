import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import * as actionCreators from '../reducers/commentState/actions';

import CommentCard from '../components/CommentCard';
import withData from '../hocs/withData';

const Component = withData(({ values }) => <CommentCard comment={values}/>);

const mapStateToProps = (state, ownProps) => {  
  const { commentId } = ownProps.match.params;
  const hasCard = commentId in state.commentState.commentCards;

  return {
    loading: !hasCard || state.commentState.commentCards[commentId].loading,
    values: hasCard ? state.commentState.commentCards[commentId].data : null,
  };  
};

const mapDispatchToProps = (dispatch, ownProps) => {  
  const { commentId } = ownProps.match.params;
  
  return {
    getData: () => {      
      dispatch(actionCreators.getCommentCard(commentId));
    }
  };  
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Component));