import React, { Component } from 'react';
import { Route, Link, withRouter, Redirect, Switch } from 'react-router-dom';

import RouteClientList from '../routes/RouteClientList';
import RouteClientInfo from '../routes/RouteClientInfo';
import RouteCommentInfo from '../routes/RouteCommentInfo';


class App extends Component {
  render() {
    return (
      <div className='wrapper'>            
        <main className='main'>     
          <Switch>                 
            <Route path='/clients' component={RouteClientList} exact/>
            <Route path='/clients/:clientId' component={RouteClientInfo} exact/>
            <Route path='/comments/:commentId' component={RouteCommentInfo}/>
            <Redirect to='/clients' from='/'/>
          </Switch>
        </main>        
      </div>      
    );
  }
}

export default App;
