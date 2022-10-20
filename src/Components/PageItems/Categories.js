import React from 'react';
import '../../css/Categories.css';
import { useState } from 'react';

const categories = [
{
	key: 'All',
	name: 'Все'
},
{
	key: 'Costumes',
	name: 'Костюмы'
},
{
	key: 'Dresses',
	name: 'Платья'
},
{
	key: 'Jackets',
	name: 'Куртки'
},
{
	key: 'Shirts',
	name: 'Рубашки'
},
{
	key: 'Sweaters',
	name: 'Свитера'
}
];

export default function Categories({chooseCatg}) {
	const [catgs, setCatgs] = useState(categories);
	return (
		<div className='main__home__categories__container'>
		{catgs.map(catg=>(
			<div className = "catg" key = {catg.key} onClick = {()=> chooseCatg(catg.key)}>{catg.name}</div>
		))
	}
		</div>
	)
}