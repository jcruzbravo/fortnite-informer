import { useEffect, useState } from 'react'

const useHandleScroll = (divReference) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const div = divReference.current;
      const { y, height, width } = div.getBoundingClientRect();
      const yPositive = (y*(-1));
      console.log(height)
      console.log(width)
      console.log(yPositive)
      const isLoaded = yPositive >= (height/2) ? true : false;
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