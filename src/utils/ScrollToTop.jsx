// src/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router";
import ReactGA from 'react-ga';

const ScrollToTop = (props) => {
  const location = useLocation();
  const initialized = props.initialized;

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    } else {
      const anchor = document.querySelector(location.hash)
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    if (initialized) {
      ReactGA.pageview(location.pathname + location.search);
    }
  }, [location, initialized]);

  return <>{props.children}</>
};

export default ScrollToTop;