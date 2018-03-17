import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CommentList from './CommentList';
import CommentListWithPaginator from './CommentListWithPaginator';

import * as actionCreators from './actions';


const mapStateToProps = ({ commentState }) => ({
  comments: commentState.comments,
  loading: commentState.loading,
  count: commentState.count
});

const mapDispatchToProps = (dispatch) => 
  bindActionCreators(actionCreators, dispatch);

const Component = CommentListWithPaginator(CommentList, 2);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Component));
