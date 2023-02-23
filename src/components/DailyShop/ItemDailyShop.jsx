import React from "react";
import ItemDailyShopList from "./ItemDailyShopList";
import '@styles/ItemDailyShop.scss';
import vBuck from '@assets/vbuck.png';

const ItemDailyShop = ({ item }) => {
  return (
    <div className="ItemDailyShop">
      <div className="item-daily-shop-info">
        <p><img src={vBuck} alt="Icon VBuck"/>{`Regular Price $${item.regularPrice}`}</p>
        <p><img src={vBuck} alt="Icon VBuck"/>{`Final Price $${item.finalPrice}`}</p>
        {item.items.map((item) => (
          <ItemDailyShopList
            key={item.id}
            image={item.images.icon}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemDailyShop;
