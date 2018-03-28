import { REQUEST_CLIENT_CARD, SUCCESS_GET_CLIENT_CARD } from './actionTypes';


export default (state, action) => {
  if (action.type === REQUEST_CLIENT_CARD) {
    return {
      loading: true,
      data: null,          
    };
  }
  
  if (action.type === SUCCESS_GET_CLIENT_CARD) {
    return {
      loading: false,
      data: {
        id: action.jsonData.id,
        name: action.jsonData.name,
        surname: action.jsonData.surname,
        advert: action.jsonData.advert,
        email: action.jsonData.email
      }
    };
  }  
};