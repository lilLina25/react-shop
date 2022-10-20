import React from 'react';
import HelloPage from './Nav/HelloPage.js';
import Header from './Header.js';
import Home from './Home.js';
import About from './Nav/About.js';
import Contacts from './Nav/Contacts.js';
import NotFound from './PageItems/NotFound.js';
import Footer from './PageItems/Footer.js';
import '../css/Wrapper.css';
import uuid from 'react-uuid';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function id(){
  return uuid();
}

const products = [
    {
      id:id(),
      title:'Костюм оленя для кошек',
      img:'/productsImages/Costume/deer.jpg',
      desc:'Костюм милого оленя для вашего любимца. Идеально для рождественской вечеринки! Подойдет для кошек и собак мелких пород.',
      category:'Costumes',
      price:'1250',
      count: 1
    },
     {
      id:id(),
      title:'Костюм дьявола для кошек',
      img:'/productsImages/Costume/devil.jpg',
      desc:'Костюм для настоящих маленьких дьяволят. Быстрый и простой способ нарядить вашего питомца в праздничный образ. Идеально подходит для Хэллоуина.',
      category:'Costumes',
      price:'869.99',
      count: 1
    },
     {
      id:id(),
      title:'Костюм зеленого дракона для кошек',
      img:'/productsImages/Costume/dragon.jpg',
      desc:'Интересный и смешной костюм в виде зеленого дракона для домашних животных (кошек и собак мелких пород).',
      category:'Costumes',
      price:'1099.99',
      count: 1
    },
     {
      id:id(),
      title:'Костюм медсестры для кошек',
      img:'/productsImages/Costume/nurse.jpg',
      desc:'Новогодний костюмчик "Медсестра" для кошек и собак мелких пород. Костюм отлично смотрится, легко надевается, и не сковывает движения Вашего питомца.',
      category:'Costumes',
      price:'999',
      count: 1
    },
     {
      id:id(),
      title:'Костюм пирата для кошек',
      img:'/productsImages/Costume/pirate.jpeg',
      desc:'Забавный костюм пирата для кошек и собак мелких пород. Материал костюма не вызывает раздражений. В комплекте с костюмом идут положительные эмоции и отличное настроение!',
      category:'Costumes',
      price:'1150',
      count: 1
    },
     {
      id:id(),
      title:'Костюм полицейского для кошек',
      img:'/productsImages/Costume/policeman.jpg',
      desc:'Костюм милого полицейского для кошек и собак мелких пород. Идеально подойдет для любого праздника.',
      category:'Costumes',
      price:'1249.99',
      count: 1
    },
     {
      id:id(),
      title:'Милое платье для кошек в розовом и голубом цвете',
      img:'/productsImages/Dresses/dress1.jpg',
      desc:'Модное платье для кошек и собак мелких пород. Отлично подходит для прогулок жарким летом и теплой весной',
      category:'Dresses',
      price:'949.99',
      count: 1
    },
    {
      id:id(),
      title:'Розовое платье для кошек',
      img:'/productsImages/Dresses/dress2.jpg',
      desc:'Простое розовое платье для кошек. Легкая хлопковая ткань будет приятна для тела вашего питомца, он не будет потеть и не будет мерзнуть. ',
      category:'Dresses',
      price:'890',
      count: 1
    },
    {
      id:id(),
      title:'Белое платье для кошек',
      img:'/productsImages/Dresses/dress3.jpg',
      desc:'Шикарное нежное белое платье для настоящих красавиц. Идеально подойдет для похода в гости или прогулки',
      category:'Dresses',
      price:'1049',
      count: 1
    },
     {
      id:id(),
      title:'Кожаная куртка для кошек',
      img:'/productsImages/Jackets/jacket1.jpg',
      desc:'Модная куртка из натуральной кожи.',
      category:'Jackets',
      price:'2049',
      count: 1
    },
     {
      id:id(),
      title:'Теплая куртка для кошек',
      img:'/productsImages/Jackets/jacket2.jpg',
      desc:'Теплая куртка для кошек и собак мелких пород с пушистым капюшоном.',
      category:'Jackets',
      price:'2449.33',
      count: 1
    },
     {
      id:id(),
      title:'Белая рубашка для кошек с рисунком',
      img:'/productsImages/Shirts/shirt1.jpg',
      desc:'Стильная рубашка для кошек и собак мелких пород. Подойдет для прогулок в летнее время',
      category:'Shirts',
      price:'449',
      count: 1
    },
     {
      id:id(),
      title:'Футболка для кошек в полосочку',
      img:'/productsImages/Shirts/shirt2.jpg',
      desc:'Футболка в полосочку из мягкой ткани идеально подойдет для кошек и собак мелких пород в летний период времени',
      category:'Shirts',
      price:'549',
      count: 1
    },
     {
      id:id(),
      title:'Рубашка для кошек розовая с рисунком',
      img:'/productsImages/Shirts/shirt3.jpg',
      desc:'Легкая рубашка из хлопка для кошек и собак мелких пород.',
      category:'Shirts',
      price:'399',
      count: 1
    },
     {
      id:id(),
      title:'Рубашка для кошек в трех цветах с рисунком',
      img:'/productsImages/Shirts/shirt4.jpg',
      desc:'Стильная рубашка для кошек в трех цветах с рисунком.',
      category:'Shirts',
      price:'699.87',
      count: 1
    },
     {
      id:id(),
      title:'Пушистый свитер в двух цветах',
      img:'/productsImages/Sweaters/sweater1.jpeg',
      desc:'Яркий, невероятно мягкий плюшевый свитер для кошек, станет прекрасным выбором для прохладных дней и украсит вашего питомца, выделив его среди остальных.',
      category:'Sweaters',
      price:'1500',
      count: 1
    },
     {
      id:id(),
      title:'Зеленый свитер для кошек',
      img:'/productsImages/Sweaters/sweater2.jpg',
      desc:'Теплый, мягкий, вязаный свитер для коошек готов гарантировать самые стильные прогулки.',
      category:'Sweaters',
      price:'849',
      count: 1
    },
     {
      id:id(),
      title:'Новогодний свитер для кошек',
      img:'/productsImages/Sweaters/sweater3.jpg',
      desc:'Свитер идеально подойдет как на зиму, так и на осень.',
      category:'Sweaters',
      price:'1850',
      count: 1
    },
     {
      id:id(),
      title:'Теплый свитер для кошек коричневого цвета',
      img:'/productsImages/Sweaters/sweater4.jpg',
      desc:'Костюм выполнен из высококачественного трикотажа, не создаст никаких раздражений и аллергий на коже питомца. Является качественным, трендовым подарком для ваших любимцев.',
      category:'Sweaters',
      price:'890',
      count: 1
    },
    {
      id:id(),
      title:'Вязаный свитер для кошек в двух цветах',
      img:'/productsImages/Sweaters/sweater5.jpg',
      desc:'Удобный вариант на осень для кошек и собак маленьких пород.',
      category:'Sweaters',
      price:'1100.99',
      count: 1
    },
    {
      id:id(),
      title:'Новогодний свитер для кошек со снеговиком',
      img:'/productsImages/Sweaters/sweater6.jpg',
      desc:'Идеальный свитер для поднятия новогоднего настроения Вам и Вашему любимцу.',
      category:'Sweaters',
      price:'1390.99',
      count: 1
    }
    ];
const order = [];
const fullItem = {};
export default function Wrapper() {
  const [items,setItems] = useState(products);
  const [orders, setOrder] = useState(order);
  const [curItems, setCurItems] = useState(products);
  const [showItem, setShowItems] = useState(false);
  const [fullItems, setFullItems] = useState(fullItem);


  function addToOrder(item){
    let isInArr = false;
    orders.forEach(order=>{
      if(order.id === item.id){
        isInArr = true;
      }
    });
    if(!isInArr){
      setOrder([...orders, item]);
    }
  }
  function deleteOrder(id){
    setOrder(orders.filter(order=>
      order.id !== id
    ))
  }
  function chooseCatg(catg){
    if(catg === 'All'){
      setCurItems(items);
    }else{
    setCurItems(items.filter(item=>
      item.category === catg
    ))}
  }
   function onShow(item){
    setShowItems(!showItem);
    setFullItems(item);
   }
   
  return (
    <div className = "wrapper">
    <Router>
    <Header orders = {orders} deleteOrder = {deleteOrder} setOrder = {setOrder}/>
    <div className = "main__container">
    <Routes>
    <Route path = '/' element = {<HelloPage/>}/>
         <Route path = '/home'
          element = {
          <Home 
          chooseCatg = {chooseCatg} 
          items={curItems} 
          addToOrder = {addToOrder} 
          onShow = {onShow}
          showItem = {showItem} 
          item = {fullItems} 
        />}
        />
      <Route path ='/about' element = {<About/>}/>
      <Route path ='/contacts' element = {<Contacts/>}/>
      <Route path ='*' element = {<NotFound/>}/>
    </Routes>
    </div>
    </Router>
    <Footer/>
		</div>
	)
}