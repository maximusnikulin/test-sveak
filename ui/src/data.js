import { randomDate } from './utils';


export const comments = {
  10: {    
    timeGet: new Date(),
    count: 2,
    values: [
      {
        date: randomDate(new Date(2012, 0, 1), new Date()),
        author: 'Author 1',
        text: 'Some Text 1',
        type: 'info', 
        id: 1111
      },
      {
        date: randomDate(new Date(2012, 0, 1), new Date()),
        author: 'Author 2',
        text: 'Some Text 2',
        type: 'important',
        id: 2222
      }      
    ]    
  }  
};

export const clients = [
  {    
    id: 10,
    name: 'Pitter',
    surname: 'Parker'
  },
  {    
    id: 11,
    name: 'Bruce',
    surname: 'Wayne'    
  }
];

export const commentCards = {
  1111: {   
    date: randomDate(new Date(2012, 0, 1), new Date()),
    author: 'Author 1',
    text: 'Some Text 2',
    type: 'info',
    clientId: 10,
    id: 1111     
  },
  2222: {    
    date: randomDate(new Date(2012, 0, 1), new Date()),
    author: 'Author 2',
    text: 'Some Text 2',
    type: 'info',      
    clientId: 11,
    id: 2222
  },  
};


export const clientCards = {
  10: {   
    id: 10, 
    name: 'Pitter',
    surname: 'Parker',
    advert: true,
    email: 'some_2@mail.ru'
  },
  11: {    
    id: 11,
    name: 'Bruce',
    surname: 'Wayne',
    advert: false,
    email: 'some_1@mail.ru'
  },  
};
