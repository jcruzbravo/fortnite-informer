import React, { useState, useEffect } from "react";
import NewBrItem from "@components/News/NewBrItem";
import useGetBrNews from "@hooks/useGetBrNews";
import "@styles/NewsBrList.scss";
import LoaderNewsBr from "@components/News/LoaderNewsBr";

const API = "https://fortnite-api.com/v2/news";

const NewsBrList = () => {
  
  const noticias = useGetBrNews(API);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (loading) {
    return (
      <section className="news-br-container">
        <h2>News about Battle Royale</h2>
        <div className="NewsBrList">
          {noticias.map((noticia) => (
            <LoaderNewsBr key={noticia.id} noticia={noticia} />
          ))}
        </div>
      </section>
    );
  } else {
    return (
      <section className="news-br-container">
        <h2>News about Battle Royale</h2>
        <div className="NewsBrList">
          {noticias.map((noticia) => (
            <NewBrItem key={noticia.id} noticia={noticia} />
          ))}
        </div>
      </section>
    );
  }
};

export default NewsBrList;
