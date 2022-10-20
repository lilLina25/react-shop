import React from 'react';
import BuyItem from './BuyItem';
import '../../css/BuyList.css';
import '../../css/Full_Item.css';
import { useState } from 'react';
import {FaRegTimesCircle} from "react-icons/fa";


export default function BuyList({sum, orders, setOrder}) {
	const [show, setShow] = useState(false);
	const [prompt, setPrompt] = useState(false);
	function showBuyItem(orders){
		return <div>
		{orders.map(order=>(
		<BuyItem key = {order.id} setShow = {setShow} sum = {sum} order = {order}/>
	))}
		</div>
	}
	function showPrompt(){
		setShow(false);
		setPrompt(true);
		setTimeout(function(){
    setPrompt(false);
    setOrder([]);
    },3000);
	}

	return (
		<div>
		
			<button className= 'buy-button__btn' onClick = {()=>setShow(!show)}>Оформить заказ</button>

			{show && <div className = 'buy-list__container__bg'>
			<div className = "buy-items__white-bg">
			 <FaRegTimesCircle className = 'close-icon' onClick = {()=> setShow(false)}/>
			 <h2>Подтвердите заказ</h2>
			 {showBuyItem(orders)}
			 <div className = "buy-list_cost">
			 <h4>Сумма заказа: {new Intl.NumberFormat().format(sum)} ₽</h4>
			  <button className= 'buy-button__btn' onClick = {() => showPrompt()}>Заказать</button>
			 </div>
			 </div>
			 </div>
			}
			 {prompt && <div className = 'prompt-item__container__bg'>
			 <div className = "prompt__white-bg">
			  <FaRegTimesCircle className = 'close-prompt' onClick = {()=> setPrompt(false)}/>
			  <h2>Ваш заказ оформлен</h2>
			  <div className = "prompt-item">
			  <p>Спасибо<br/> за<br/> покупку</p>
			  <img src = {"./img/productsImages/cat1.jpeg"} alt = "logo"/>
			  </div>
			  </div>
			 </div>
			}
		</div>
	)
}