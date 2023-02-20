import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetBrNews = (API) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await axios(API);
      const data = response.data;
      const dataObject = data.data;
      const brNews = dataObject.br;
      const arrayNews = brNews.motds;
      setNews(arrayNews);
    }
    loadData();
  }, []);

  return news;
}

export default useGetBrNews;