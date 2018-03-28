import { 
  SUCCESS_GET_CLIENT_LIST, 
  REQUEST_CLIENT_LIST,
  SUCCESS_GET_CLIENT_CARD,
  REQUEST_CLIENT_CARD
} from './actionTypes';

import clientCard from './clientCard';


export const initState = {
  clientList: [],
  listLoading: false,
  clientCards: {},
  lastGet: false,
  allCount: 0
};

export default (state=initState, action) => {
  switch(action.type) {
    case REQUEST_CLIENT_CARD:
    case SUCCESS_GET_CLIENT_CARD:
      return {
        ...state,
        clientCards: {
          ...state.clientCards,
          [action.clientId]: clientCard(state, action)
        }
      };

    case REQUEST_CLIENT_LIST:
      return {
        ...state, 
        listLoading: true
      };

    case SUCCESS_GET_CLIENT_LIST:
      return {
        ...state,
        clientList: action.jsonData.values,
        listLoading: false,    
        allCount: action.jsonData.count    
      };
    
    default:
      return state;
  }
};