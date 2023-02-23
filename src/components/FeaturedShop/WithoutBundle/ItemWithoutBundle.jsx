import React from 'react'
import ItemWithoutBundleList from './ItemWithoutBundleList';
import '@styles/ItemWithoutBundle.scss';

const ItemWithoutBundle = ( {item }) => {
  return (
    <div className='ItemWithoutBundle'>
      <div className='item-without-bundle-info'>
        <p>{`Regular Price $${item.regularPrice}`}</p>
        <p>{`Final Price $${item.finalPrice}`}</p>
        {item.items.map((item) => (
          <ItemWithoutBundleList
            key={item.id}
            image={item.images.icon}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default ItemWithoutBundle;