import { clients } from '../../data'; 
import { REQUEST_CLIENT_LIST, SUCCESS_GET_CLIENT_LIST } from './actionTypes';


export const requestClientList = () => ({
  type: REQUEST_CLIENT_LIST
});

export const successGetClientList = (jsonData) => ({
  type: SUCCESS_GET_CLIENT_LIST,
  jsonData
});

export const getClientList = () => (dispatch) => {
  dispatch(requestClientList());

  new Promise((res) => setTimeout(() => res({
    values: clients,
    count: clients.length
  }), 1000))
    .then((jsonData) => 
      dispatch(successGetClientList(jsonData)));
};