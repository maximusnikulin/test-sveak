import { comments, commentCards } from '../../data'; 
import { 
  REQUEST_COMMENT_LIST, 
  SUCCESS_GET_COMMENT_LIST, 
  REQUEST_COMMENT_CARD, 
  SUCCESS_GET_COMMENT_CARD
} from './actionTypes';


export const requestCommentList = () => ({
  type: REQUEST_COMMENT_LIST
});

export const successGetCommentList = (jsonData) => ({
  type: SUCCESS_GET_COMMENT_LIST,
  jsonData
});

export const getCommentList = (clientId) => (dispatch, getState) => {    
  if (getState().commentState.commentList.length) {
    return;
  }

  dispatch(requestCommentList());

  new Promise((res) => setTimeout(() => res(comments[clientId]), 1000))
    .then((jsonData) => {
      dispatch(successGetCommentList(jsonData));
    });
};

export const requestCommentCard = (commentId) => ({
  type: REQUEST_COMMENT_CARD,
  commentId
});

export const successGetCommentCard = (commentId, jsonData) => ({
  type: SUCCESS_GET_COMMENT_CARD,
  jsonData,
  commentId
});

export const getCommentCard = (commentId) => (dispatch, getState) => {
  if (getState().commentState.commentCards[commentId]) {
    return;
  }

  dispatch(requestCommentCard(commentId));
  
  new Promise((res) => setTimeout(() => res(commentCards[commentId]), 1000))
    .then((jsonData) => dispatch(successGetCommentCard(commentId, jsonData)));
};