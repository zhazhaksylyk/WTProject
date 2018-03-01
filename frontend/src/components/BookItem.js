import React, { Component } from 'react';
import '../styles/Book.css';
import b3 from '../images/b3.jpg';

export class BookItem extends Component{
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
      alert(this.props.title + " " + this.props.author + " is added to Cart");
    }
    handleAddToWLClicked = (e) => {
    	this.props.onAddToWLClicked(this.props.index);
    }
	render(){
		return(
			<div className = "book-wrapper">
			<img className = "book-image" src = {this.props.image} width = "100px" height = "150px"/>
			<div className = "book-title"> {this.props.title} </div>
			<div className = "book-author"> {this.props.author} </div>
			<div className = "book-price"> {this.props.price} USD</div>
			<button className = "btn-ATCart" onClick = {this.handleClick} disabled = {this.props.isInCart}>
			Add to Cart</button>
            <button onClick = {this.handleAddToWLClicked} className = "wl"> ♥ Add to WishList </button>
			</div>
		
			);
	}
}