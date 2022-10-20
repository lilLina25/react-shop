import React from 'react';
import { useState } from 'react';
import '../css/Header.css';
import {AiTwotoneShopping} from "react-icons/ai";
import Cart from './Cart/Cart.js';
import Navigation from './Nav/Navigation.js';



export default function Header({orders, deleteOrder, setOrder}) {
	let [cartOpen, setCartOpen] = useState(false);

	return (
		<header className = "header">
		<div className = "header__container">
		<h1 className = "header__logo"> Cat's clothes shop </h1>
		<Navigation />

		<div className = "header__shop-cart">
			<AiTwotoneShopping 
			className = {cartOpen ?
				'header__shop-cart-button-active'
				:'header__shop-cart-button'}
			onClick = {() => setCartOpen(!cartOpen)}
			/>
			<p className = "header__counter">{orders.length}</p>

		</div>
			<Cart orders = {orders} deleteOrder = {deleteOrder} cartOpen = {cartOpen} setOrder = {setOrder}/>
			</div>
			<div className = 'header__presentation__container'>
			</div>
		</header>
	)
}