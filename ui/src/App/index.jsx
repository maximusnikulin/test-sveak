import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

import RouteClientList from '../routes/RouteClientList';


class App extends Component {  
  componentDidMount() {
    
  }
  
  render() {
    return (
      <div className='wrapper'>    
        <header className='header'>
          Header
        </header>          
        <main className='main'>          
          <Route path='/' component={RouteClientList} exact/>
        </main>
        <footer className='footer'>
          Footer
        </footer>
      </div>      
    );
  }
}

export default App;
