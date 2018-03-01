import React, { Component } from 'react';
import '../styles/App.css';
import { Header } from './Header.js';
import { Cart } from './Cart.js';
import { BookItem } from './BookItem.js';
import  Carousel  from './Carousel.js';
import Main from '../3main/Main';
import b3 from '../images/b3.jpg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; 
import {Account} from './Account.js';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import instagram from '../images/instagram.png';
import pinterest from '../images/pinterest.png';
import chaos from '../images/chaos.jpg';
import moan from '../images/noam.jpg';
import me from '../images/me.jpg';
import zumba from '../images/zumba.jpg';
import caesar from '../images/caesar.jpg';
import fox from '../images/fox.jpg';
import aerobics from '../images/aerobics.jpg';
import moon from '../images/moon.jpg';

var BOOKS = [
{
  id: 1,
  image: moon,
  title: 'New moon',
  author: 'Stephenie Meyer',
  price: 20,
  category: 'Education',
  quantity: 1,
  isInCart: false,
  isInWishList: false
},
{
  id: 2,
  image: chaos ,
  title: 'Chaos',
  author: 'James Gleick',
  price: 15,
  category: 'Science',
  quantity: 1,
  isInCart: false,
  isInWishList: false
},
{
  id: 3,
  image: b3,
  title: 'Monte Cristo',
  author: 'Alexandre Dumas',
  price: 25,
  category: 'Classic Literature',
  quantity: 1,
  isInCart: false,
  isInWishList: false
},
{
  id: 4,
  image: zumba,
  title: 'Zumba',
  author: 'Beto Perez',
  price: 25,
  category: 'Health & Fitness',
  quantity: 1,
  isInCart: false,
  isInWishList: false
},
{
  id: 5,
  image: caesar,
  title: 'Caesars',
  author: 'Gaius Suetonius',
  price: 25,
  category: 'Education',
  quantity: 1,
  isInCart: false,
  isInWishList: false
},
{
  id: 6,
  image: moan,
  title: 'New Generation',
  author: 'Noam Chomsky',
  price: 25,
  category: 'Education',
  quantity: 1,
  isInCart: false,
  isInWishList: false
},
{
  id: 7,
  image: aerobics,
  title: 'Aerobics',
  author: 'Nina McIntosh',
  price: 25,
  category: 'Health & Fitness',
  quantity: 1,
  isInCart: false,
  isInWishList: false
},
{
  id: 8,
  image: fox,
  title: 'Fox in Socks',
  author: 'Dr Seuss',
  price: 25,
  category: "Children's Books",
  quantity: 1,
  isInCart: false,
  isInWishList: false
},
{
  id: 9,
  image: me,
  title: 'Me before you',
  author: 'Jojo Moyes',
  price: 25,
  category: "Children's Books",
  quantity: 1,
  isInCart: false,
  isInWishList: false
}
];

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      displayedBooks: BOOKS,
      cartList:[],
      nextId: 0,
      isCartMode: false,
      displayCategory: 'Popular Books',
      totalPrice: 0
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onAddToCartClicked = this.onAddToCartClicked.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }
 onInputChange(inputValue){      // searching using title or author
  if(inputValue.length > 0){
    let searchQuery = inputValue.toLowerCase();  
    let displayedBooks = BOOKS.filter((el) => {
      let searchValue = el.title.toLowerCase();   
      let searchAuthor = el.author.toLowerCase();
      return searchValue.indexOf(searchQuery) !== -1 || searchAuthor.indexOf(searchQuery) !== -1;     
                      // indexOf returns -1 if element is not found
    });
    if(displayedBooks.length > 0){
    this.setState({
      displayedBooks: displayedBooks,
      displayCategory: 'Popular Books',
      isCartMode: false
    });
   }
  } else{
    this.setState({
      displayedBooks: BOOKS
    });
  }
 }
 onAddToCartClicked(index){    // add Book to Cart
    this.state.cartList.push( {id: this.state.nextId,
                               title: BOOKS[index].title,
                               image: BOOKS[index].image,
                               author: BOOKS[index].author,
                               price: BOOKS[index].price, 
                               quantity: 1,
                               indexOfBook: index});
    let newPrice = 0;
    let i;
    for(i = 0; i < this.state.cartList.length; i++){
      newPrice += this.state.cartList[i].price;
    }
    this.setState({
       nextId: ++this.state.nextId,
       totalPrice: newPrice
    });
    BOOKS[index].isInCart = true;
 }
 removeItem(id, index, quantity) {   // remove Book from Cart
    let price = 0;
    let i;
    let newPrice;
    for(i = 0; i < this.state.cartList.length; i++){
      if(this.state.cartList[i].id === id){
        price = this.state.cartList[i].price * quantity;
        this.state.cartList[i].quantity = quantity;
      }
    }
    newPrice = this.state.totalPrice - price;

    this.setState({
        cartList: this.state.cartList.filter((cartItem) => cartItem.id !== id),
        totalPrice: newPrice 
      });
    BOOKS[index].isInCart = false;
}
handleSeeBooksClicked = (category) => {
   this.setState({
    displayedBooks: BOOKS.filter((BookItem) => BookItem.category === category),
    displayCategory: category + " Category Books",
    isCartMode: false
   });
}
handleCartClicked = () => {  // show Cart
  this.setState({
    isCartMode: true,
    displayedBooks: BOOKS,
    displayCategory: 'Add more books to your CART'
  });
}
handleAddNewClicked = () => {   // close Cart
  this.setState({
    isCartMode: false,
    displayCategory: 'Popular Books'
  });
}
onAddToWLClicked = (index) => {  // add to WL
   BOOKS[index].isInWishList = true;
}
handleLogoClicked = () => {     // when NZ logo clicked
  this.setState({
    displayedBooks: BOOKS,
    displayCategory: 'Popular Books',
    isCartMode: false
  });
}
increaseTotalPrice = (price) => {
    let newPrice = this.state.totalPrice + price;
    this.setState({
      totalPrice: newPrice
    });
}
decreaseTotalPrice = (price) => {
    let newPrice = this.state.totalPrice - price;
    this.setState({
      totalPrice: newPrice
    });
}

render(){
  return(
    <div className = "app">
    <Header onInputChange = {this.onInputChange} onCartClicked = {this.handleCartClicked} 
     onLogoClicked = {this.handleLogoClicked} onAccountClicked = {this.onAccountClicked} />

    <Carousel onSeeBooksClicked = {this.handleSeeBooksClicked} />
    <div className = "books">
    <div className = "displayCategory">{this.state.displayCategory}</div>
    <ul className = "book-list">
            {
              this.state.displayedBooks.map((book, index) => {    
                return <BookItem
                 key = {book.id}
                 id = {book.id}
                 index = {index}
                 image = {book.image}
                 title = {book.title}
                 author = {book.author}
                 price = {book.price}
                 onAddToCartClicked = {this.onAddToCartClicked}
                 isInCart = {book.isInCart}
                 onAddToWLClicked = {this.onAddToWLClicked}
                 /> 
               }
              )}
         </ul>
       </div>
        
       
       <div className = "cartMode" hidden = {this.state.isCartMode === false ? "hidden" : ""}>
       <Cart cartList = {this.state.cartList} removeItem = {this.removeItem} 
          onAddNewClicked = {this.handleAddNewClicked} increaseTotalPrice = {this.increaseTotalPrice}
          decreaseTotalPrice = {this.decreaseTotalPrice}/>
          <div className = "totalPrice">Total Price: { this.state.totalPrice } USD</div>
          <button className = "checkout">Proceed to Checkout</button>
       </div>

       <div className = "footer">
           <p>NZ Books Shop</p>
           <p>Follow us on Social Media</p>
        <div className = "footer-icons"> 
         <a href = "">
           <img src = {facebook} width = "50px" height = "50px" />
         </a>
         <a href = "">
         <img src = {twitter} width = "50px" height = "50px"/>
         </a>
         <a href = "">
         <img src = {instagram} width = "50px" height = "50px"/>
         </a>
         <a href = "">
         <img src = {pinterest} width = "50px" height = "50px"/>
         </a>
        </div>
       </div>

    </div>
    );
}

}

export default App;
