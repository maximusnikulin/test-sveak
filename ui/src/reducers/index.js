import { combineReducers } from 'redux';

import commentState from './commentState';
import clientState from './clientState';


export default combineReducers({
  commentState,
  clientState
});