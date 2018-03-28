import { clients, clientCards } from '../../data'; 

import { 
  REQUEST_CLIENT_LIST, 
  SUCCESS_GET_CLIENT_LIST,
  REQUEST_CLIENT_CARD,
  SUCCESS_GET_CLIENT_CARD
} from './actionTypes';


export const requestClientList = () => ({
  type: REQUEST_CLIENT_LIST
});

export const successGetClientList = (jsonData) => ({
  type: SUCCESS_GET_CLIENT_LIST,
  jsonData
});

export const getClientList = () => (dispatch, getState) => {
  if (getState().clientState.clientList.length !== 0) {
    return;
  }

  dispatch(requestClientList());

  new Promise((res) => setTimeout(() => res({
    values: clients,
    count: clients.length
  }), 1000))
    .then((jsonData) => 
      dispatch(successGetClientList(jsonData)));
};

export const requestClientCard = (clientId) => ({
  type: REQUEST_CLIENT_CARD,
  clientId
});

export const successGetClientCard = (clientId, jsonData) => ({
  type: SUCCESS_GET_CLIENT_CARD,
  jsonData,
  clientId
});

export const getClientCard = (clientId) => (dispatch, getState) => {
  const currentCard = getState().clientState.clientCards[clientId];
  if (currentCard && currentCard.data !== null) {
    return;
  }

  dispatch(requestClientCard(clientId));

  return new Promise((res) => setTimeout(() => res(clientCards[clientId]), 1000))
    .then((jsonData) => {
      dispatch(successGetClientCard(clientId, jsonData));
    });
};