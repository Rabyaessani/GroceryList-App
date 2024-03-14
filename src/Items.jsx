import React from 'react'
import SingleITems from './SingleITems'

const Items = ({items,removeItem,editItem}) => {
  return (
   <div className="items">
    {items.map((item)=>{
        return <SingleITems key={item.Id} removeItem={removeItem} item={item} editItem={editItem} ></SingleITems>
    })}
   </div>
  )
}

export default Items