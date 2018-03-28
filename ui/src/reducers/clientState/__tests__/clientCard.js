import * as actionTypes from '../actionTypes';
import * as actions from '../actions';

import clientCardReducer from '../clientCard';

import { clientCards } from '../../../data';


it('Should init new client card', function() {  
  const afterState = {
    loading: true,
    data: null
  };
  expect(
    clientCardReducer({}, actions.requestClientCard(10))
  ).toEqual(afterState);
});


it('Should fill data of new client card', function() {
  const clientId = 10;
  const afterState = {
    loading: false,
    data: clientCards[clientId]
  };
  expect(
    clientCardReducer({}, actions.successGetClientCard(clientId, clientCards[clientId]))
  ).toEqual(afterState);
});