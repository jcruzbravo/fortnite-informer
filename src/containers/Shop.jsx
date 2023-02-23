import React from "react";
import Header from "@components/Header";
import FeaturedShop from "@components/FeaturedShop";
import DailyShop from "@components/DailyShop";
import "@styles/Shop.scss";

const Shop = () => {
  return (
    <>
      <Header />
      <div className="Shop">
        <FeaturedShop />
        <DailyShop />
      </div>
    </>
  );
};

export default Shop;
