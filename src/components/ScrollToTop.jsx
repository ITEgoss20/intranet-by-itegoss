import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollableDiv = document.getElementById("main-content");
    if (scrollableDiv) {
      scrollableDiv.scrollTo(0, 0); // Reset scroll inside the container
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
