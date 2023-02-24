import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


const LoaderNewsBr = ({ noticia }) => {
  return (
    <div className="NewBrItem">
      <div className="new-br-info">
        <p className="new-br-img">
          <Skeleton
            count={1}
            height={340}
            width={260}
            baseColor={"white"}
            highlightColor={"#e3e3e3"}
          />
        </p>
      </div>
      <div className="new-br-info">
        <p style={{ width: 320, textAlign: "center" }}>
          <Skeleton
            count={1}
            width={180}
            height={20}
            baseColor={"white"}
            highlightColor={'#e3e3e3'}
          />
        </p>
        <p style={{ width: 320, textAlign: "center" }}>
          <Skeleton count={3} highlightColor={"#e3e3e3"} baseColor={"white"} />
        </p>
      </div>
    </div>
  );
};

export default LoaderNewsBr;
