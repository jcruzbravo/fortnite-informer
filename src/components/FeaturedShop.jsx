import React from "react";
import ItemFeaturedShop from "@components/ItemFeaturedShop";
import useGetItemsFeaturedShop from "@hooks/useGetItemsFeaturedShop";
import '@styles/FeaturedShop.scss'

const API_URL = "https://fortnite-api.com/v2/shop/br/combined";

const FeaturedShop = () => {
  const items = useGetItemsFeaturedShop(API_URL);
  const itemsWithBundle = items.filter((item) => item.bundle != null);
  return (
    <section className="items-featured-shop-container">
      <h2 className="title">Featured Bundle</h2>
      <div className="FeaturedShop">
        {itemsWithBundle.map((item) => (
          <ItemFeaturedShop
            key={`is-${item.bundle.name}`}
            item={item}
            vBuckIcon={item}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedShop;
