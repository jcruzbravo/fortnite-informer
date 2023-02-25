import React, { useEffect, useState } from "react";
import ItemFeaturedShop from "./ItemFeaturedShop";
import useGetItemsFeaturedShop from "@hooks/useGetItemsFeaturedShop";
import "@styles/FeaturedShop.scss";
import LoaderFeatured from "./LoaderFeatured";

const API_URL = "https://fortnite-api.com/v2/shop/br/combined";

const FeaturedShop = () => {
  const items = useGetItemsFeaturedShop(API_URL);
  const itemsWithBundle = items.filter((item) => item.bundle != null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (loading) {
    return (
      <section className="items-featured-shop-container">
        <h2>Featured Bundle</h2>
        <div className="FeaturedShop">
          {itemsWithBundle.map((item) => (
            <LoaderFeatured key={`is-${item.bundle.name}`} item={item} />
          ))}
        </div>
      </section>
    );
  } else {
    return (
      <section className="items-featured-shop-container">
        <h2>Featured Bundle</h2>
        <div className="FeaturedShop">
          {itemsWithBundle.map((item) => (
            <ItemFeaturedShop
              key={`is-${item.bundle.name}`}
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

export default FeaturedShop;
