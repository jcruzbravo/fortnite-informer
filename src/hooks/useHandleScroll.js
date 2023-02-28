import { useEffect, useState } from 'react'

const useHandleScroll = (divReference) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const div = divReference.current;
      const { y, height, width } = div.getBoundingClientRect();
      const yPositive = (y*(-1));
      const isLoaded = yPositive >= 700 ? true : false;
      setLoaded(isLoaded);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return loaded;
  
}

export default useHandleScroll;