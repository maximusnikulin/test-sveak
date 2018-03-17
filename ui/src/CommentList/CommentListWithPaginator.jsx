import React, { Component } from 'react';
import {Link, Route, withRouter} from 'react-router-dom';
import querystring from 'querystring';


const CommentListWithPaginator = (WrappedComponent, countPerPage) => {  
  return class extends Component {                          
    componentDidMount() {
      console.log(this.props);
    }

    componentDidUpdate() {
      console.log(this.props);
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
      const {count, loading} = this.props;

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
      const {comments, count} = this.props;      
      const startIndex = countPerPage * (activePage - 1);
      const endIndex = startIndex + countPerPage;
      console.log(startIndex, endIndex);

      return comments.slice(startIndex, endIndex);      
    }

    renderPageComments = (props) => {      
      const activePage = this.getActivePage(props.location.search);
      const commentsSlice = this.getPageComments(activePage);

      return <WrappedComponent {...this.props} comments={commentsSlice}/>;
    }

    render() {                      
      return(
        <div className='comments-with-pagination'>
          <div className='comments-with-pagination__header'>
            {this.renderPageLinks()}
          </div>
          <div className='comments-with-pagination__content'>
            <Route render={this.renderPageComments}/>
          </div>
          <div className='comments-with-pagination__footer'>
            {this.renderPageLinks()}
          </div>
        </div>
      );
    }
  };
};

export default CommentListWithPaginator; 