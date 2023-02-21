import React from 'react';
import '@styles/ItemShop.scss';

const ItemShop = ( { item, vbuckIcon }) => {
  return (
    <div className='ItemShop'>
      <div className="item-shop-info">
        <p>{`Regular Price $${item.regularPrice}`}</p>
        <p>{`Final Price $${item.finalPrice}`}</p>
        <img src={item.bundle.image} alt={item.bundle.name} className="item-shop-img" />
        <p>{item.bundle.name}</p>
        <p>{item.bundle.info}</p>
      </div>
    </div>
  );
}

export default ItemShop;