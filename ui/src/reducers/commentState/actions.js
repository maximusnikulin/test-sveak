import { comments } from '../../data'; 
import { REQUEST_COMMENT_LIST, SUCCESS_GET_COMMENT_LIST } from './actionTypes';


export const requestCommentList = () => ({
  type: REQUEST_COMMENT_LIST
});

export const successGetCommentList = (jsonData) => ({
  type: SUCCESS_GET_COMMENT_LIST,
  jsonData
});

export const getCommentList = (clientID) => (dispatch, getState) => {  
  const state = getState();

  if (state.commentState.comments.length) {
    return;
  }

  dispatch(requestCommentList());

  new Promise((res) => setTimeout(() => res(comments[clientID]), 1000))
    .then((jsonData) => 
      dispatch(successGetCommentList(jsonData)));
};