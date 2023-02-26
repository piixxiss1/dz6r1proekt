import React from 'react';

import './header.css';

import iconBrand from '../img/Group.jpg'
import iconPerson from '../img/iconPerson.svg'
import iconHeart from '../img/iconHeart.svg'
import iconBag from '../img/iconBag.svg'


const Header = () => {
  return (
    <div className='header_'>

    <img src={iconBrand} className='icon-1'/>

        <ul className='ul-1'>

          <li >ЖЕНЩИНЫ</li>
          <li className='li-men'>МУЖЧИНЫ</li>
          <li>ПОИСК</li>

        </ul>

        <input className='input-header'></input>
        <div className='line-1'></div>

        <ul className='ul-2'>

          <li className='li-RU'>RU</li>
          <li>UA</li>
          <li>EN</li>
          

        </ul>

      <div className='icon-2'>
        <img src={iconPerson}/>
        <img src={iconHeart}/>
        <img src={iconBag}/>
        
      </div>
      
    </div>
  )
}

export default Header
