import React from "react";
import useGetItemsDailyShop from "@hooks/useGetItemsDailyShop";
import ItemDailyShop from "./ItemDailyShop";
import '@styles/DailyShop.scss'

const API_URL = "https://fortnite-api.com/v2/shop/br/combined";

const DailyShop = () => {
  const items = useGetItemsDailyShop(API_URL);
  return (
    <section className="items-daily-shop-container">
      <h2 className="title">Daily</h2>
      <div className="DailyShop">
        {items.map((item) => (
          <ItemDailyShop
            key={`is-${item.items[0].id}`}
            item={item}
          />
        ))}
      </div>
    </section>
  );
};

export default DailyShop;