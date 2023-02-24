import React, { useEffect, useState } from "react";
import NewSwItem from "@components/News/NewSwItem";
import useGetSwNews from "@hooks/useGetSwNews";
import "@styles/NewsSwList.scss";
import LoaderNewsSw from "@components/News/LoaderNewsSw";

const API = "https://fortnite-api.com/v2/news";

const NewsSwList = () => {
  const noticias = useGetSwNews(API);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (loading) {
    return (
      <section className="news-sw-container">
        <h2>News about Save the World</h2>
        <div className="NewsSwList">
          {noticias.map((noticia) => (
            <LoaderNewsSw key={noticia.title} noticia={noticia} />
          ))}
        </div>
      </section>
    );
  } else {
    return (
      <section className="news-sw-container">
        <h2>News about Save the World</h2>
        <div className="NewsSwList">
          {noticias.map((noticia) => (
            <NewSwItem key={noticia.title} noticia={noticia} />
          ))}
        </div>
      </section>
    );
  }
};

export default NewsSwList;
