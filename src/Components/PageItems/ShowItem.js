import React from 'react';
import {FaRegTimesCircle} from "react-icons/fa";
import '../../css/Full_Item.css';

export default function ShowItem({item, onShow, addToOrder}) {
	return (
		<div className = 'home__full-item__container__bg'>
		     <div className = "full-item__white-bg">
		     <FaRegTimesCircle className = "full-item__close-icon" onClick = {() => onShow(item)}/>
		        <img src={"./img"+item.img} alt = "full-item-img" onClick = {() => onShow(item)} />
		        <h2>{item.title}</h2>
		        <p>{item.desc}</p>
		        <b>{item.price} ₽</b>
		        <div 
		        className = "full-item__add-to-cart"
		        onClick ={() => addToOrder(item)}
		        >+</div>
		     </div>
		</div>
		
	)
}