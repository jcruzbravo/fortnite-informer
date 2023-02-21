import React from 'react';
import ItemShop from '@components/ItemShop';
import Header from '@components/Header'
import useGetItemsShop from '@hooks/useGetItemsShop';
import '@styles/Shop.scss';

const API_URL = 'https://fortnite-api.com/v2/shop/br/combined';

const Shop = () => {
  const items = useGetItemsShop(API_URL);
  const itemsWithBundle = items.filter(item => item.bundle != null)
  console.log(itemsWithBundle.length)
  return (
    <>
    <Header/>
    <section className='items-shop-container'>
      <div className='Shop'>
        {itemsWithBundle.map((item) => (
          <ItemShop key={`is-${item.bundle.name}`} item={item} vBuckIcon={item}/>
        ))}
      </div>
    </section>
    </>

  );
}

export default Shop;