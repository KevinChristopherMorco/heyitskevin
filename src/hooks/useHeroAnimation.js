import { useEffect, useState } from "react";
import computer from "../images/hero/computer.png";
import magnifyingGlass from "../images/hero/magnifyingGlass.png";
import visualize from "../images/hero/visualize.png";

const useHeroAnimation = () => {
  const [imageCount, setImageCount] = useState(0);
  const imagesList = [computer, magnifyingGlass, visualize];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageCount((prev) => (prev === imagesList.length - 1 ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return { currentImage: imagesList[imageCount] };
};

export default useHeroAnimation;
