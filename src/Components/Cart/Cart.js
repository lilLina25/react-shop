import React from 'react';
import Order from './Order.js';
import BuyList from './BuyList.js';
import '../../css/Cart.css';


function showNothing(){
	return(
	<div className = 'header__cart__empty'>
	<h2>Корзина пуста</h2>
	</div>
	)
}
export default function Cart({orders, deleteOrder, cartOpen, setOrder}) {
		const increase = (id) => {
		setOrder((orders) => {
			return orders.map(order=>{
				if(order.id === id){
					return{
						...order,
						count: order.count++
					}
				}
				return order;
			})
		})
	}
	const decrease = (id) => {
		setOrder((orders) => {
			return orders.map(order=>{
				if(order.id === id){
					return{
						...order,
						count: order.count - 1 > 0 ? 
							order.count - 1
							: deleteOrder(id)
					
					}
				}
				return order;
			})
		})
	}
	let sum = 0;
		function showOrders(orders){
		orders.forEach(order =>sum= sum + Number(order.price)*Number(order.count));

		return (
		<div>
		{orders.map(order => 
			(
			<Order key = {order.id} order = {order} deleteOrder = {deleteOrder} increase = {increase} decrease = {decrease}/>
			)
		)}
		<p className = 'header__cart__sum'>Стоимость: {new Intl.NumberFormat().format(sum)} ₽</p>

		<BuyList sum = {sum} orders = {orders} setOrder = {setOrder}/>
		</div>
		)
}
	return (
		<div>
			{cartOpen && (
				<div className='header__shop-cart__container'>
					{orders.length>0 ?
						showOrders(orders) : showNothing()}
				</div>
				)}
		</div>
	)
}