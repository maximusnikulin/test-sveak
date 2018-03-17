import React, {Component} from 'react';

import Comment from '../Comment';


class CommentList extends Component {
  componentDidMount(){
    this.props.getCommentList();
  } 

  renderLoader() {
    return(
      <div className='comments__loader'>Loading...</div>
    );
  }

  renderList() {
    return (
      <div className='comments__list'>    
        {this.props.comments.map((item, key) => 
          <Comment key={key} {...item}/>          
        )}
      </div>
    );
  }

  render() {
    const { loading } = this.props;

    if (loading) {
      return this.renderLoader();
    }

    return this.renderList();  
  }
}

export default CommentList;