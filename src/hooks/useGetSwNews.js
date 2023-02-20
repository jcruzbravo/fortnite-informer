import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetSwNews = (API) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await axios(API);
      const data = response.data;
      const dataObject = data.data;
      const swNews = dataObject.stw;
      const arrayNews = swNews.messages;
      setNews(arrayNews);
    }
    loadData();
  }, []);

  return news;
}

export default useGetSwNews;