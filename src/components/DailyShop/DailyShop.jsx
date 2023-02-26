import React, { useEffect, useState } from "react";
import useGetItemsDailyShop from "@hooks/useGetItemsDailyShop";
import ItemDailyShop from "./ItemDailyShop";
import '@styles/DailyShop.scss'
import LoaderDaily from "./LoaderDaily";

const API_URL = "https://fortnite-api.com/v2/shop/br/combined";

const DailyShop = () => {
  const items = useGetItemsDailyShop(API_URL);
  const itemsWithAssetWithoutBundle = items.filter((item) => item.newDisplayAsset != null)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (loading) {
    return (
      <section className="items-daily-shop-container">
      <h2>Daily</h2>
      <div className="DailyShop">
        {itemsWithAssetWithoutBundle.map((item) => (
          <LoaderDaily
            key={`is-${item.items[0].id}`}
            item={item}
          />
        ))}
      </div>
    </section>
    );
  } else {
    return (
      <section className="items-daily-shop-container">
        <h2>Daily</h2>
        <div className="DailyShop">
          {itemsWithAssetWithoutBundle.map((item) => (
            <ItemDailyShop
              key={`is-${item.items[0].id}`}
              item={item}
              background={item.newDisplayAsset.materialInstances[0].images.Background}
            />
          ))}
        </div>
      </section>
    );
  }

};

export default DailyShop;