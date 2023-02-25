import React, { useRef } from "react";
import Header from "@components/Header";
import FeaturedShop from "@components/FeaturedShop/FeaturedShop";
import DailyShop from "@components/DailyShop/DailyShop";
import "@styles/Shop.scss";
import WithoutBundle from "@components/FeaturedShop/WithoutBundle/WithoutBundle";
import useHandleScroll from "@hooks/useHandleScroll";

const Shop = () => {
  const divFeaturedShop = useRef();
  const loaded = useHandleScroll(divFeaturedShop);

  return (
    <>
      <Header />
      <div className="Shop">
        <div ref={divFeaturedShop} className="featured">
          <FeaturedShop />
        </div>
        {loaded && (
          <div className="daily">
            <DailyShop />
          </div>
        )}

        {loaded && (
          <div className="without">
            <WithoutBundle />
          </div>
        )}
      </div>
    </>
  );
};

export default Shop;
