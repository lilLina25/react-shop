import React from 'react';
import '../../css/Buy_Item.css';

export default function BuyItem({setShow, order}) {
	let cost = Number(order.price)*Number(order.count)
	return (
		<div className = "buy-item">
		<h3>{order.title}</h3>
		<div>
		<img alt = "buy-item" src={"./img"+order.img}/>
		<b>{order.price} ₽ × {order.count}<br/> = <br/>{new Intl.NumberFormat().format(cost)} ₽</b>
		</div>
		</div>
	)
}