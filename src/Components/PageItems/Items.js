import React from 'react';
import Item from './Item.js';
import '../../css/Items.css';

export default function Items({items, addToOrder, onShow}) {
	const result = items.map(item=>{
		return (
			<Item key={item.id} item={item} addToOrder = {addToOrder} onShow = {onShow}/>
		);
	})
	return (
		<div className = "main__home__items__container">
			{result}
		</div>
	)
}