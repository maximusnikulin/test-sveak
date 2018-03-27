import * as actionTypes from '../actionTypes';
import * as actions from '../actions';

import { initState } from '../index';
import clientStateReducer from '../index';

import { clients } from '../../../data';

it('Should init reducer of clientState', function() {  
  const afterState = initState;
  expect(
    clientStateReducer(initState, {})
  ).toEqual(afterState);
});

it('Should toggle loading state to true', function() {
  const afterState = {
    ...initState,
    listLoading: true
  };
  expect(
    clientStateReducer(initState, actions.requestClientList())
  ).toEqual(afterState);
});

it('Should get client list from server', function() {
  const afterState = {
    ...initState,
    listLoading: false,
    clientList: clients
  };
  const jsonData = {
    values: clients    
  };
  expect(
    clientStateReducer(initState, actions.successGetClientList({
      values: clients      
    }))
  ).toEqual(afterState);
});