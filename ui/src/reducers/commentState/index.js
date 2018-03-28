import { 
  SUCCESS_GET_COMMENT_LIST, 
  REQUEST_COMMENT_LIST,
  REQUEST_COMMENT_CARD,
  SUCCESS_GET_COMMENT_CARD,
} from './actionTypes';

import commentCard from './commentCard';

const initialState = {
  loadingList: true,
  commentList: [],
  allCount: 0,
  commentCards: {}  
};

export default (state=initialState, action) => {
  switch(action.type) {
    case REQUEST_COMMENT_CARD:
    case SUCCESS_GET_COMMENT_CARD:
      return {
        ...state,
        commentCards: {
          ...state.commentCards,
          [action.commentId]: commentCard(state, action)
        }        
      };    

    case REQUEST_COMMENT_LIST:
      return {
        ...state, 
        listLoading: true
      };

    case SUCCESS_GET_COMMENT_LIST:
      return {
        ...state,
        commentList: action.jsonData.values,
        allCount: action.jsonData.count,        
        listLoading: false
      };
    
    default:
      return state;
  }
};