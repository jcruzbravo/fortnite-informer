import React from 'react'
import '@styles/ItemWithoutBundleList.scss';

const ItemWithoutBundleList = ({ image, name, description}) => {
  return (
    <>
      <img src={image} alt={name} className="item-without-bundle-img"/>
      <p className='item-without-bundle-name'>{name}</p>
      <p className='item-without-bundle-description'>{description}</p>
    </>
  );

}

export default ItemWithoutBundleList;