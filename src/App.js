import React, { useState } from 'react';
import Menu from './Menu';
import items from './data';
import { useEffect } from 'react';

function App() {

  const [data, setData] = useState(items)
  const [filter, setFilter] = useState([])

  const handlePage = (getItem) =>{
    if(getItem === 'all'){
      setFilter(data); 
      return
    }
    const result = data.filter((item)=>{
      return item.category === getItem;
    });

    console.log(result);

    setFilter(result);
  }

  useEffect(()=>{
    setFilter(items)
  }, [])

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <div className='btn-container'>
  
          <button onClick={() => handlePage('all')} type='button' className='filter-btn'>All</button>
          <button onClick={() => handlePage('breakfast')} type='button' className='filter-btn'>Breakfast</button>
          <button onClick={() => handlePage('lunch')} type='button' className='filter-btn'>Lunch</button>
          <button onClick={() => handlePage('shakes')} type='button' className='filter-btn'>Shakes</button>

        </div>
        <Menu menuList = {filter} /> 
      </section>
    </main>
  );
}

export default App;
