import { 
  REQUEST_COMMENT_CARD, 
  SUCCESS_GET_COMMENT_CARD 
} from './actionTypes';


export default (state, action) => {
  if (action.type === REQUEST_COMMENT_CARD) {
    return {
      loading: true,
      data: null,          
    };
  }
  
  if (action.type === SUCCESS_GET_COMMENT_CARD) { 
    const { id, text, author, clientId, type } = action.jsonData;
    return {
      loading: false,
      data: {
        id,
        text,
        author,
        clientId,
        type
      }
    };
  } 
  
  return state; 
};