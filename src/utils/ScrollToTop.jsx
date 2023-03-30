// src/ScrollToTop.jsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import ReactGA from 'react-ga';

const ScrollToTop = (props) => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);
  const TRACKING_ID = process.env.REACT_APP_GA_ID;

  useEffect(() => {
    if (TRACKING_ID) {
      ReactGA.initialize(TRACKING_ID);
      setInitialized(true);
      console.info('Analytics Running');
    }
  },[]);

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