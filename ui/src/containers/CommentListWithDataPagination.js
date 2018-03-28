import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CommentList from '../components/CommentList';
import withPagination from '../hocs/withPagination';
import withData from '../hocs/withData';

import * as actionCreators from '../reducers/commentState/actions';


const mapStateToProps = ({ commentState }) => ({
  values: commentState.commentList,
  loading: commentState.listLoading,
  count: commentState.allCount
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getData: () => dispatch(actionCreators.getCommentList(ownProps.match.params.clientId))
});  

const Component = withData(withPagination(({ values }) => <CommentList comments={values}/>, 1));


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Component));
