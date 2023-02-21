import { useEffect, useState } from "react";
import axios from "axios";

const useGetItemsShop = (API_URL) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await axios(API_URL);
      const data = response.data.data;
      const featured = data.featured;
      const entries = featured.entries;
      console.log(entries.length)
      setItems(entries);
    };
    loadData();
  }, []);

  return items;
};

export default useGetItemsShop;


