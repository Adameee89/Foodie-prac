import React, { useState } from 'react'
import HeaderComponent from '../components/Header/HeaderComponent'
import ExploreMenuComponent from '../components/ExploreMenu/ExploreMenuComponent'
import FoodDisplayComponent from '../components/FoodDisplay/FoodDisplayComponent';

function HomePage() {

  const [category, setCategory] = useState('All');
  return (
    <div>
        <HeaderComponent/> 
        <ExploreMenuComponent category={category} setCategory={setCategory}/>
        <FoodDisplayComponent category={category}/>
    </div>
  )
}

export default HomePage