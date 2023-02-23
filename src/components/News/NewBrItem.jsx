import React from 'react';
import '@styles/NewBrItem.scss';

const NewBrItem = ({ noticia }) => {
  return (
    <div className="NewBrItem">
      <div className="new-br-info">
        <img src={noticia.tileImage} alt={noticia.title} className="new-br-img" />
        <p>{noticia.title}</p>
        <p>{noticia.body}</p>
      </div>
    </div>
  );
}

export default NewBrItem;