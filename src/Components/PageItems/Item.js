import React from 'react';
import '../../css/Item.css';

export default function Item({item, addToOrder, onShow}) {
	return (
		<div className = 'item'>
		<img src={"./img"+item.img} alt = "page-items" onClick = {() => onShow(item)} />
		<div className = 'item__div'>
		<h2>{item.title}</h2>
		<p>{item.desc}</p>
		</div>
		<b>{item.price} ₽</b>
		<div 
		className = "item__add-to-cart"
		onClick ={() => addToOrder(item)}
		>+</div>
		</div>
	)
}