import React, { useState } from 'react'
import HeaderComponent from '../components/Header/HeaderComponent'
import ExploreMenuComponent from '../components/ExploreMenu/ExploreMenuComponent'

function HomePage() {

  const [category, setCategory] = useState('All');
  return (
    <div>
        <HeaderComponent/> 
        <ExploreMenuComponent category={category} setCategory={setCategory}/>
    </div>
  )
}

export default HomePage