import React, { Component } from 'react';
import './Cart.css';
import h from './h.jpg';

export class CartItem extends Component{
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
       this.props.removeItem(id, index);
	}
	increaseQuantity(){
		this.setState({
			qauntity: ++this.state.quantity
		});
	}
	decreaseQuantity(){
		if(this.state.quantity > 1){
             this.setState({
			quantity: --this.state.quantity
		});
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