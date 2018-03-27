import React, { Component } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import querystring from 'querystring';

import Preloader from '../components/Preloader';


export default (WrappedComponent, countPerPage) => {  
  return class extends Component {     
    componentDidMount() {      
      this.props.getData();
    }
    
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
    
    renderPageLinks() {
      const { count, loading } = this.props;
      
      if (loading) {
        return null;
      }

      const pageNumbers = Math.ceil(count / countPerPage);
      const pageLinks = [];      
       
      for (let i = 1; i <= pageNumbers; i++) {        
        pageLinks.push(
          <Link to={`?p=${i}`} key={i}>
            {i}
          </Link>
        );
      }

      return(
        <ul className='paginator'>
          {pageLinks}
        </ul>
      );
    }

    getPageComments(activePage) {
      const { values, count } = this.props;      
      const startIndex = countPerPage * (activePage - 1);
      const endIndex = startIndex + countPerPage;      

      return values.slice(startIndex, endIndex);      
    }

    renderDataSlice = (props) => {      
      const activePage = this.getActivePage(window.location.search);
      const valuesSlice = this.getPageComments(activePage);
      
      return <WrappedComponent {...this.props} values={valuesSlice}/>;
    }

    render() {                      
      return(
        <Preloader show={this.props.loading}>
          <div className='comments-with-pagination'>
            <div className='comments-with-pagination__header'>
              {this.renderPageLinks()}
            </div>
            <div className='comments-with-pagination__content'>
              {this.renderDataSlice()}
            </div>
            <div className='comments-with-pagination__footer'>
              {this.renderPageLinks()}
            </div>
          </div>   
        </Preloader>     
      );
    }
  };
};