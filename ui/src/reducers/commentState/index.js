import { SUCCESS_GET_COMMENT_LIST, REQUEST_COMMENT_LIST } from './actionTypes';


const initialState = {
  loading: true,
  comments: [],
  count: 0,
  lastGet: null
};

export default (state=initialState, action) => {
  switch(action.type) {
    case REQUEST_COMMENT_LIST:
      return {
        ...state, 
        loading: true
      };

    case SUCCESS_GET_COMMENT_LIST:
      return {
        comments: action.jsonData.values,
        count: action.jsonData.count,
        lastGet: new Date(),
        loading: false
      };
    
    default:
      return state;
  }
};