import React from 'react';
import '../../css/Count_Styles.css';
import {FaPlusSquare, FaMinusSquare} from "react-icons/fa";


export default function Counter({order, increase, id, decrease}) {	
	return (
		<div>
		<div className = 'count'>
		<FaPlusSquare className = 'count-icon' onClick = {() => increase(id)}/>
		<div className='win'>{order.count}</div>
		<FaMinusSquare className = 'count-icon' onClick = {() => decrease(id)}/>
		</div>
		</div>
	)
}