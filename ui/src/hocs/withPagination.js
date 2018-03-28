import React, { Component } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import querystring from 'querystring';

import Preloader from '../components/Preloader';
import Pagination from '../components/Pagination';


export default (WrappedComponent, countPerPage) => {  
  return class extends Component {     
    getActivePage(search) {
      const uri = decodeURIComponent(search).slice(1);
      const query = querystring.parse(uri);

      if (query.p) {        
        const p = Number(query.p);

        if (Number.isInteger(p)) {
          return p;
        }
      }

      return 1;
    }
    
    getPageLinks() {
      const { count, loading } = this.props;
      
      if (loading) {
        return null;
      }

      const pageNumbers = Math.ceil(count / countPerPage);
      const pageLinks = [];      
       
      for (let i = 1; i <= pageNumbers; i++) {        
        pageLinks.push(i);
      };

      return pageLinks;
    }

    getDataSlice(activePage) {
      const { values, count } = this.props;      
      const startIndex = countPerPage * (activePage - 1);
      const endIndex = startIndex + countPerPage;      

      return values.slice(startIndex, endIndex);      
    }

    getComponentWithDataSlice = (props) => {      
      const activePage = this.getActivePage(window.location.search);
      const valuesSlice = this.getDataSlice(activePage);      
      
      return <WrappedComponent {...this.props} values={valuesSlice}/>;
    }

    render() {                      
      return(        
        <Pagination links={this.getPageLinks()}>
          {this.getComponentWithDataSlice()}
        </Pagination>                  
      );
    }
  };
};