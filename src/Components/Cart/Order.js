import React from 'react';
import {FaRegTimesCircle} from "react-icons/fa";
import Counter from './Counter.js';
import '../../css/Order.css';

export default function Order({order, deleteOrder,increase, decrease}) {
	
	return (
		<div className ='order'>
		<div>
		<FaRegTimesCircle className = 'order_delete-icon' onClick = {() => deleteOrder(order.id)}/>
		<h2>{order.title}</h2>
		<img alt = "order-item" src={"./img"+order.img}/>
		</div>
		<b>{order.price} ₽</b>
		<Counter order= {order} deleteOrder = {deleteOrder} increase = {increase} id = {order.id} decrease= {decrease}/>
		</div>
	)
}