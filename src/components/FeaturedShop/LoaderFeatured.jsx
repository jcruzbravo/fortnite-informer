import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoaderFeatured = ({item}) => {
  return (
    <div className="ItemFeaturedShop">
      <div className="item-featured-shop-info">
        <div className="item-featured-shop-img">
          <Skeleton
            count={1}
            height={340}
            width={340}
            baseColor={"white"}
            highlightColor={"#e3e3e3"}
          />
        </div>
      </div>
      <div className="item-featured-shop-info">
        <p style={{ width: 320, textAlign: "center" }}>
          <Skeleton
            count={2}
            height={20}
            width={300}
            baseColor={"white"}
            highlightColor={"#e3e3e3"}
          />
        </p>
      </div>
    </div>
  );
};

export default LoaderFeatured;
