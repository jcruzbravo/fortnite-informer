import { useEffect, useState } from "react";
import axios from "axios";

const useGetItemsDailyShop = (API_URL) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await axios(API_URL);
      const data = response.data.data;
      const daily = data.daily;
      const entries = daily.entries;
      setItems(entries);
    };
    loadData();
  }, []);
  return items;
};

export default useGetItemsDailyShop;