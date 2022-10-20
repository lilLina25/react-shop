import React from 'react';
import Categories from './PageItems/Categories.js';
import Items from './PageItems/Items.js';
import ShowItem from './PageItems/ShowItem.js';

export default function Home({chooseCatg, items, addToOrder, onShow, showItem, item}) {
	return (
		<div>
		<Categories chooseCatg = {chooseCatg} />
   		<Items items={items} addToOrder = {addToOrder} onShow = {onShow} />
   		{showItem && <ShowItem item = {item} onShow = {onShow} addToOrder = {addToOrder}/>}
		</div>
	)
}