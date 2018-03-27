import React, { Component } from 'react';

import Preloader from '../components/Preloader';


export default (WrappedComponent) => {
  return class extends Component {    
    componentDidMount() {
      this.props.getData();
    }

    render() {
      return (
        <Preloader show={this.props.loading}>
          <WrappedComponent {...this.props}/>
        </Preloader>
      );
    }
  };
};