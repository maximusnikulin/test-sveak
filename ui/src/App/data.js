import { randomDate } from '../utils';


export const commentList = {
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
};