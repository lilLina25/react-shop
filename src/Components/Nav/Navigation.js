import React from 'react';
import '../../css/Navigation.css';
import {NavLink} from 'react-router-dom';
import { TbMenu2 } from "react-icons/tb";
import { useState } from 'react';
export default function Navigation() {
	const [showSelect, setShowSelect] = useState(false);
	return (
		<div className = 'header__nav'>
			<ul className = "nav">
			<li><NavLink to = "/home" className={({ isActive }) =>(isActive ? " active" : "link")}>Домашняя страница</NavLink></li>
			<li><NavLink to = "/about" className={({ isActive }) =>(isActive ? " active" : "link")}>О нас</NavLink></li>
			<li><NavLink to = "/contacts" className={({ isActive }) =>(isActive ? " active" : "link")}>Контакты</NavLink></li>
			</ul>
			<TbMenu2 className = 'header__show-select' onClick = {()=> setShowSelect(!showSelect)}/>
			{showSelect && <div className = "header__select-list">
			<ul className = 'select'>
			<li><NavLink to = "/home" className={({ isActive }) =>(isActive ? " active" : "link")}>Домашняя страница</NavLink></li>
			<li><NavLink to = "/about" className={({ isActive }) =>(isActive ? " active" : "link")}>О нас</NavLink></li>
			<li><NavLink to = "/contacts" className={({ isActive }) =>(isActive ? " active" : "link")}>Контакты</NavLink></li>
			</ul>
			</div>}
		</div>
	)
}