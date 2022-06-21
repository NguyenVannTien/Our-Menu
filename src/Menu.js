import React from 'react';
import Categories from './Categories';

const Menu = ({menuList}) => {
  return (
  <div key={menuList.id} className='section-center'>
    {menuList.map(menu => (
      <Categories post = {menu}/>
    ))}
  </div>

  );
};

export default Menu;
