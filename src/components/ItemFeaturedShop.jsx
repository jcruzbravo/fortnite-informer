import React from 'react';
import '@styles/ItemFeaturedShop.scss';

const ItemFeaturedShop = ( { item }) => {
  return (
    <div className='ItemFeaturedShop'>
      <div className="item-featured-shop-info">
        <p>{`Regular Price $${item.regularPrice}`}</p>
        <p>{`Final Price $${item.finalPrice}`}</p>
        <img src={item.bundle.image} alt={item.bundle.name} className="item-featured-shop-img" />
        <p>{item.bundle.name}</p>
        <p>{item.bundle.info}</p>
      </div>
    </div>
  );
}

export default ItemFeaturedShop;