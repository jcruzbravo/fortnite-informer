import React from "react";
import Header from "@components/Header";
import NewsBrList from "@containers/NewsBrList";
import NewsSwList from "@containers/NewsSwList";
import "@styles/Home.scss";

const Home = () => {
  return (
    <>
      <Header />
      <div className="Home">
        <NewsBrList />
        <NewsSwList />
      </div>
    </>
  );
};

export default Home;
