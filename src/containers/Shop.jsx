import React from "react";
import Header from "@components/Header";
import FeaturedShop from "@components/FeaturedShop/FeaturedShop";
import DailyShop from "@components/DailyShop/DailyShop";
import "@styles/Shop.scss";
import WithoutBundle from "@components/FeaturedShop/WithoutBundle/WithoutBundle";

const Shop = () => {
  return (
    <>
      <Header />
      <div className="Shop">
        <FeaturedShop />
        <DailyShop />
        <WithoutBundle/>
      </div>
    </>
  );
};

export default Shop;
