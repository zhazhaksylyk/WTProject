import React, { Component } from 'react';
import '../styles/carouselStyle.css';
import bookInfo from '../books.json';
import BookCard from './BookCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Carousel extends Component {
  constructor(props){
    super(props);
  }
  getCategoryBook = () => {
    const backgroundColors = [
      {backgroundColor:'#4595B8'}, 
      {backgroundColor:'#6E5485'}, 
      {backgroundColor:'#BAF47A'}, 
      {backgroundColor:'#FFF360'}, 
      {backgroundColor:'#1F1C20'}, 
    ]; 
    const darkColors = [ 
      {color:'#5FD79B'}, 
      {color:'#01579B'}, 
      {color:'#6A1B9A'}, 
      {color:'#D50000'}, 
      {color:'#FF9F00'}, 
    ];
    
    let carouselBooks = [];
    const textColor = 'color: #FFFFFF;';
    for (let i=0; i < bookInfo.store.length; i++) {
      const color = backgroundColors[i];
      const dark = darkColors[i];
      carouselBooks.push(
        <div key={i} >
          <BookCard 
          bookInfo={bookInfo.store[i].books[0]}
          category = {bookInfo.store[i].category} 
          style={color} 
          dark={dark}
          onSeeBooksClicked = {this.props.onSeeBooksClicked}
          />
        </div>
      );
    };
    return carouselBooks;
  }
  
  render() {
    var settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: '30px',
      slidesToShow: 3,
      speed: 500
      
    };
    return (
      <div className='Carousel'>
        <Slider {...settings}>
          {this.getCategoryBook()}
        </Slider>
        <div></div>
      </div>
      
    );
  }
}

export default Carousel;