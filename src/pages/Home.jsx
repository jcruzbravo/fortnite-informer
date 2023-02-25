import React, { useState, useEffect } from "react";
import Header from "@components/Header";
import NewsBrList from "@containers/NewsBrList";
import NewsSwList from "@containers/NewsSwList";
import "@styles/Home.scss";

const Home = () => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 5000);
  }, [])
  
  return (
    <>
      <Header />
      <div className="Home">
          <NewsBrList />
        {loaded && (
          <NewsSwList />
        )}
      </div>
    </>
  );
};

export default Home;
