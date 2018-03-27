import { SUCCESS_GET_CLIENT_LIST, REQUEST_CLIENT_LIST } from './actionTypes';


export const initState = {
  clientList: [],
  listLoading: false,
  clientInfo: {},
  lastGet: false,
  allCount: 0
};

export default (state=initState, action) => {
  switch(action.type) {
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