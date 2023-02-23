import React from 'react'
import '@styles/ItemDailyShopList.scss'

const ItemDailyShopList = ({ image, name, description}) => {
  return (
    <>
      <img src={image} alt={name} className="item-daily-shop-img"/>
      <p className='item-daily-shop-name'>{name}</p>
      <p className='item-daily-shop-description'>{description}</p>
    </>
  );

}

export default ItemDailyShopList;