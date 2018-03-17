import React, {Component} from 'react';
import {Route, Link, withRouter} from 'react-router-dom';

import PageComment from '../PageComment';


class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <header className='header'>
          <Link to='/'>Comments</Link>          
          <Link to='/c'>C</Link>          
        </header>
        <main className='main'>
          <Route path='/' exact component={PageComment}/>          
          <Route path='/c' render={() => 'Hello'}/>          
        </main>
      </div>      
    );
  }
}

export default App;
