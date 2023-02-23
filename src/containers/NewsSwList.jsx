import React from 'react';
import NewSwItem from '@components/News/NewSwItem';
import useGetSwNews from '@hooks/useGetSwNews';
import '@styles/NewsSwList.scss'

const API = 'https://fortnite-api.com/v2/news';

const NewsSwList = () => {

  const noticias = useGetSwNews(API);

  return (
    <section className='news-sw-container'>
      <div className='NewsSwList'>
      <h2>News about Save the World</h2>
        {noticias.map((noticia) => (
          <NewSwItem key={noticia.title} noticia={noticia}/>
        ))}
      </div>
    </section>
  );
}

export default NewsSwList;