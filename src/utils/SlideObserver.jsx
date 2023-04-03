import { useEffect, useState } from "react";

const SlideObserver = (props) => {
  const [observeReady, setObserveReady] = useState(false);

  useEffect(() => {
    if (observeReady) {
      const slides = document.querySelectorAll(".slide-wrapper");
      const lazyImages = document.querySelectorAll(".lazy-load");
      const slideOptions = {
        root: null,
        threshold: 0.33,
        rootMargin: "0px"
      };
      const imgOptions = {
        root: null,
        threshold: 0,
        rootMargin: "100% 0px 100% 0px"
      };
      
      const slideObserver = new IntersectionObserver(function(entries, slideObserver) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-active");
            if (!entry.target.classList.contains("slide-visited") ) {
              entry.target.classList.add("slide-initial-load");
          }
          } else {
            if (entry.target.classList.contains("slide-active") ) {
              entry.target.classList.add("slide-visited");
            }
            entry.target.classList.remove("slide-active","slide-initial-load");
          }
        })
      }, slideOptions);

      const imageLoader = new IntersectionObserver(function(entries, imageLoader) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            let lazySrc = entry.target.getAttribute("lazy-src");
            if ( lazySrc && !entry.target.hasAttribute("src")) {
              entry.target.setAttribute("src", lazySrc);
            }
          }
        })
      }, imgOptions);

      slides.forEach(slide =>{
        slideObserver.observe(slide);
      })

      lazyImages.forEach (image => {
        imageLoader.observe(image);
      });

    } else {
      window.addEventListener('load', setObserveReady(true));
      return () => window.removeEventListener('load', setObserveReady(true));
    }
  },[observeReady]);

  return <>{props.children}</>
};

export default SlideObserver;