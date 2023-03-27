// src/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  const pathUrl = new URL(window.location.href);
  const location = useLocation();

  useEffect(() => {
    if (!pathUrl.hash) {
      window.scrollTo(0, 0);
    } else {
      const anchor = document.querySelector(pathUrl.hash)
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location]);

  return <>{props.children}</>
};

export default ScrollToTop;