import React, { Component } from 'react';
import './carouselStyle.css';

class BookCard extends Component {
  constructor(props){
     super(props);
  }
  handleSeeBooksClicked = () => {
  	this.props.onSeeBooksClicked(this.props.category);
  }
  render() {
    return (
      <div className='BookCard' style={this.props.style}>
        
      <div className='Cover'>
        <img src={require('./3main/bookShelf/booksImgs/' + this.props.bookInfo.image)} />
      </div>

        <div className='Info'>
        <h1>{this.props.bookInfo.name}</h1>


        <div className='SeeBook' style={this.props.dark}>
        <button onClick = {this.handleSeeBooksClicked} style={this.props.dark}>See Books</button>
      </div>

      </div>

     </div>
    );
  }
}

export default BookCard;