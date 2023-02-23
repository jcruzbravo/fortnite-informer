import React from "react";
import "@styles/NewSwItem.scss";

const NewSwItem = ({ noticia }) => {
  return (
    <div className="NewSwItem">
      <div className="new-sw-info">
        <img src={noticia.image} alt={noticia.title} className="new-sw-img" />
        <p>{noticia.title}</p>
        <p>{noticia.body}</p>
      </div>
    </div>
  );
};

export default NewSwItem;
