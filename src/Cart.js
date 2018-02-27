import React, { Component } from 'react';
import './Cart.css';
import h from './h.jpg';

class CartItem extends Component{
	constructor(props){
		super(props);
        this.state = {
        	quantity: this.props.quantity
        }
		this.removeItem = this.removeItem.bind(this);
		this.increaseQuantity = this.increaseQuantity.bind(this);
		this.decreaseQuantity = this.decreaseQuantity.bind(this);
	}
	removeItem(id, index){
       this.props.removeItem(id, index, this.state.quantity);
	}
	increaseQuantity(){
		this.setState({
			quantity: ++this.state.quantity
		});
    this.props.increaseTotalPrice(this.props.price);
	}
	decreaseQuantity(){
		if(this.state.quantity > 1){
             this.setState({
			quantity: --this.state.quantity
		});
   this.props.decreaseTotalPrice(this.props.price);
		}
	}
	render(){
		return(
			<tr className = "cart-item">

			<td><img className = "cartItem-img" src = {h} width = "80px" height = "100px"/></td> 
            <td className = "cartItem-title">{this.props.title}</td>
            <td className = "cartItem-author">{this.props.author}</td>
             <td className = "cartItem-price"> $ {this.props.price}</td>
             <td className = "quantity">
               <button className = "cartItem-btn1" onClick = {this.decreaseQuantity}>-</button>
               <div className = "cartItem-quantity">{this.state.quantity}</div>
               <button className = "cartItem-btn2" onClick = {this.increaseQuantity}>
               +</button>
              </td>
               <td className = "subtotal">$ {this.props.price * this.state.quantity}</td>
               <td className = "remove-cartItem">
            <button className = "remove-btn" onClick = {(e)=> this.removeItem(this.props.id, this.props.indexOfBook)}>
                   Remove
                 </button>
               </td>

              </tr>
			);
	}
}

export class Cart extends Component{
	constructor(props){
		super(props);
		//this.state = {
			//totalPrice: this.props.totalPrice
		//}
		this.removeItem = this.removeItem.bind(this);
	}
    removeItem(id, index, quantity) {
    this.props.removeItem(id, index, quantity);
  }
  increaseTotalPrice = (price) =>{
    this.props.increaseTotalPrice(price);
  }
  decreaseTotalPrice = (price) =>{
    this.props.decreaseTotalPrice(price);
  }
	render(){
		return(
			<div className = "shopping-cart">
			<h2 className = "cart-h">Your shopping cart</h2>
			<button onClick = {this.props.onAddNewClicked} className = "add-btn">Add new product</button>
			<div className = "shopping-list"> 
			<table className = "cart-table">
              <tr>
              <th>books(s)</th>
              <th>title</th>
              <th>author</th>
              <th>unit price</th>
              <th>quantity</th>
              <th>subtotal</th>
              <th></th>
              </tr>
              {
              	this.props.cartList.map((cartItem, index) => {
                     return <CartItem 
                     indexOfBook = {cartItem.indexOfBook}
                     indexOfCartItem = {index}
                     id = {cartItem.id}
                     key = {cartItem.id}
                     title = {cartItem.title}
                     author = {cartItem.author}
                     price = {cartItem.price}
                     quantity = {cartItem.quantity}
                     image = {cartItem.image}
                     removeItem = {this.removeItem}
                     increaseQuantity = {this.increaseQuantity}
                     increaseTotalPrice = {this.increaseTotalPrice}
                     decreaseTotalPrice = {this.decreaseTotalPrice}
                     />
              	})
              }
             </table>
			</div>
			</div>
			);
	}

}