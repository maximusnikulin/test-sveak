import { randomDate } from './utils';


export const comments = {
  10: {    
    timeGet: new Date(),
    count: 3,
    values: [
      {
        date: randomDate(new Date(2012, 0, 1), new Date()),
        author: 'Author 1',
        text: 'Some Text 1',
        type: 'info'
      },
      {
        date: randomDate(new Date(2012, 0, 1), new Date()),
        author: 'Author 2',
        text: 'Some Text 2',
        type: 'important'
      },
      {
        date: randomDate(new Date(2012, 0, 1), new Date()),
        author: 'Author 3',
        text: 'Some Text 3',
        type: 'important'
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

export const clientInfo = {
  10: {    
    name: 'Pitter',
    surname: 'Parker',
    advert: true,
    email: 'some_2@mail.ru'
  },
  11: {    
    name: 'Bruce',
    surname: 'Wayne',
    advert: false,
    email: 'some_1@mail.ru'
  },  
};
