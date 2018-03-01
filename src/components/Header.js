import React, { Component } from 'react';
import '../styles/Header.css';
import icart from '../images/cart.png';
import iaccount from '../images/account.png';
import ilogo from '../images/logo.png';
import {Cart} from './Cart.js';
import {Account} from './Account.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; 

export class Header extends Component{
	constructor(props){
		super(props);

		this.state = {
			inputValue: ''
		}
		this.handleChange = this.handleChange.bind(this);
	}
     handleChange(event){
         const value = event.target.value;
         this.setState({
         	inputValue: value
         });
         this.props.onInputChange(this.state.inputValue);
     }
    
	render(){
		return(
			
			<div className = "container">

			<img className = "logo-account" src = { iaccount } />
			<img className = "logo-cart" src = { icart } onClick = {this.props.onCartClicked} />

			<input className = "header-search" type = "text" placeholder = "Search by Title or Author ....."
			 onChange = {this.handleChange} />

			<img className = "logo" src = {ilogo} width = "100px" height = "100px" 
			     onClick = {this.props.onLogoClicked} />
			    
			</div>
			
			);
	}
}