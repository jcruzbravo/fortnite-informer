import React from "react";
import "@styles/ItemWithoutBundle.scss";
import vBuck from "@assets/vbuck.png";

const ItemWithoutBundle = ({ item, background }) => {
  return (
    <div className="ItemWithoutBundle">
      <div className="item-without-bundle-info">
        <img
          src={background}
          alt={item.devName}
          className="item-without-bundle-shop-img"
        />
        <div className="item-without-bundle-content">
          <p>
            <img src={vBuck} alt="" className="vbuck" />
            {`Regular $${item.regularPrice}`}
          </p>
          <p>
            <img src={vBuck} alt="" className="vbuck" />
            {`Final $${item.finalPrice}`}
          </p>
        </div>
          <p className='item-without-bundle-name'>{item.devName}</p>
      </div>
    </div>
  );
};

export default ItemWithoutBundle;
