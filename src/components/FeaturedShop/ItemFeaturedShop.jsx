import React from 'react';
import '@styles/ItemFeaturedShop.scss';
import vBuck from '@assets/vbuck.png';

const ItemFeaturedShop = ( { item, background }) => {
  return (
    <div className='ItemFeaturedShop'>
      <div className="item-featured-shop-info">
        <img src={background} alt={item.bundle.name} className="item-featured-shop-img" />
        <div className='item-featured-shop-content'>
          <p><img src={vBuck} alt="Icon VBuck" className='vbuck'/>{`Regular $${item.regularPrice}`}</p>
          <p><img src={vBuck} alt="Icon VBuck" className='vbuck'/>{`Final $${item.finalPrice}`}</p>
          <p>{item.bundle.name}</p>
          <p>{item.bundle.info}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemFeaturedShop;