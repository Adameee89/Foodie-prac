import React from 'react'
import './FoodDisplayComponent.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/storeContext'
import FoodItemComponent from '../FoodItem/FoodItemComponent'

function FoodDisplayComponent({category}) {

  const {food_list} = useContext(StoreContext)



  return (
    <div className='food-display' id='food-display'>
      <h2>Top Dishes Near You</h2>

      <div className='food-display-list' id='food-display-list'>

        {food_list.map((item,index) => {

          if(category==='All' || category === item.category){
            return <FoodItemComponent 
                   key={index} 
                   id={item._id} 
                   name={item.name} 
                   image={item.image} 
                   price={item.price} 
                   description={item.description}
          />
          }
        })}

      </div>

    </div>
  )
}

export default FoodDisplayComponent