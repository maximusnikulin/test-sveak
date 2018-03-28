import * as actionTypes from '../actionTypes';
import * as actions from '../actions';

import { initState } from '../index';
import clientStateReducer from '../index';

import { clients, clientCards } from '../../../data';

describe('asd', () => {

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
      clientList: clients,
      allCount: clients.length
    };
  
    const jsonData = {
      values: clients,
      count: clients.length    
    };
  
    expect(
      clientStateReducer(initState, actions.successGetClientList(jsonData))
    ).toEqual(afterState);
  });
  
  it('Should create new index of card', function() {
    const clientId = 10;  
          
    expect(clientId in clientStateReducer(initState, actions.requestClientCard(10)).clientCards)
      .toEqual(true);      
  });
});