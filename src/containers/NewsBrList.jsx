import React from 'react';
import NewBrItem from '@components/NewBrItem';
import useGetBrNews from '@hooks/useGetBrNews';
import '@styles/NewsBrList.scss'

const API = 'https://fortnite-api.com/v2/news';

const NewsBrList = () => {

  const noticias = useGetBrNews(API);

  return (
    <section className='news-br-container'>
      <div className='NewsBrList'>
      <h2>News about Battle Royale</h2>
        {noticias.map((noticia) => (
          <NewBrItem key={noticia.id} noticia={noticia}/>
        ))}
      </div>
    </section>
  );
}

export default NewsBrList;
