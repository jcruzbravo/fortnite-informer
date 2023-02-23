import React from "react";
import "@styles/ItemDailyShop.scss";
import vBuck from "@assets/vbuck.png";

const ItemDailyShop = ({ item, background }) => {
  return (
    <div className="ItemDailyShop">
      <div className="item-daily-shop-info">
        <img
          src={background}
          alt={item.devName}
          className="item-daily-shop-img"
        />
        <div className="item-daily-shop-content">
          <p>
            <img src={vBuck} alt="Icon VBuck" className="vbuck" />
            {`Regular $${item.regularPrice}`}
          </p>
          <p>
            <img src={vBuck} alt="Icon VBuck" className="vbuck" />
            {`Final $${item.finalPrice}`}
          </p>
        </div>
          <p className="item-daily-shop-name">{item.devName}</p>
      </div>
    </div>
  );
};

export default ItemDailyShop;
