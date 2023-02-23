import React from 'react';
import useGetItemsFeaturedShop from '@hooks/useGetItemsFeaturedShop';
import ItemWithoutBundle from './ItemWithoutBundle';
import '@styles/WithoutBundle.scss';

const API_URL = "https://fortnite-api.com/v2/shop/br/combined";

const WithoutBundle = () => {
  const items = useGetItemsFeaturedShop(API_URL);
  const itemsWithoutBundle = items.filter((item) => item.bundle == null);
  return (
    <section className='items-without-bundle-container'>
      <h2>Featured Without Bundle</h2>
      <div className='WithoutBundle'>
        {itemsWithoutBundle.map((item) => (
          <ItemWithoutBundle 
            key={`is-${item.devName}`}
            item={item}
          />
        ))}
      </div>
    </section>
  );
}

export default WithoutBundle;