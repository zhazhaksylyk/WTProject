import React, { Component } from 'react';
import './Book.css';
import b3 from './b3.jpg';

export class Book extends Component{
	constructor(props){
		super(props);
		//this.state = {
			//isAdded: false
		//}
	 this.handleClick = this.handleClick.bind(this);
	}
    handleClick(e){
      this.props.onAddToCartClicked(this.props.index);
      //this.setState({
      	//isAdded: true
      //});

    }
	render(){
		return(
			<div className = "book-wrapper">
			<img className = "book-image" src = {b3} width = "100px" height = "150px"/>
			<div className = "book-title"> {this.props.title} </div>
			<div className = "book-author"> {this.props.author} </div>
			<div className = "book-price"> {this.props.price} USD</div>
			<button className = "btn-ATCart" onClick = {this.handleClick} disabled = {this.props.isInCart}>
			Add to Cart</button>
            <div className = "wl"> ♥ Add to WishList </div>
			</div>
		
			);
	}
}