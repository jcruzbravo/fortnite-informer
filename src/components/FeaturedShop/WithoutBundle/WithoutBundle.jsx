import React, { useState, useEffect } from "react";
import useGetItemsFeaturedShop from "@hooks/useGetItemsFeaturedShop";
import ItemWithoutBundle from "./ItemWithoutBundle";
import "@styles/WithoutBundle.scss";
import LoaderWithout from "./LoaderWithout";

const API_URL = "https://fortnite-api.com/v2/shop/br/combined";

const WithoutBundle = () => {
  const items = useGetItemsFeaturedShop(API_URL);
  const itemsWithAssetWithoutBundle = items.filter(
    (item) => item.newDisplayAsset != null && item.bundle == null
  );
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (loading) {
    return (
      <section className="items-without-bundle-container">
        <h2>Featured Without Bundle</h2>
        <div className="WithoutBundle">
          {itemsWithAssetWithoutBundle.map((item) => (
            <LoaderWithout
              key={`is-${item.devName}`}
              item={item}
            />
          ))}
        </div>
      </section>
    );
  } else {
    return (
      <section className="items-without-bundle-container">
        <h2>Featured Without Bundle</h2>
        <div className="WithoutBundle">
          {itemsWithAssetWithoutBundle.map((item) => (
            <ItemWithoutBundle
              key={`is-${item.devName}`}
              item={item}
              background={
                item.newDisplayAsset.materialInstances[0].images.Background
              }
            />
          ))}
        </div>
      </section>
    );
  }
};

export default WithoutBundle;
