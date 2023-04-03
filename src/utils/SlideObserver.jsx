import { useEffect, useState } from "react";

const SlideObserver = (props) => {
  const [observeReady, setObserveReady] = useState(false);

  useEffect(() => {
    if (observeReady) {
      const slides = document.querySelectorAll(".slide-wrapper");
      const options = {
        root: null,
        threshold: 0.33,
        rootMargin: "0px"
      };
      
      const slideObserver = new IntersectionObserver(function(entries, slideObserver) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-active");
            if (!entry.target.classList.contains("slide-visited") ) {
              entry.target.classList.add("slide-initial-load");
              
              // lazy load any images
              let imageList = Array.from(entry.target.getElementsByTagName("img"));
              imageList.forEach(img => {
                let lazySrc = img.getAttribute("lazy-src");
                if ( lazySrc ) {
                  img.setAttribute("src", lazySrc);
                }
              });
          }
          } else {
            if (entry.target.classList.contains("slide-active") ) {
              entry.target.classList.add("slide-visited");
            }
            entry.target.classList.remove("slide-active","slide-initial-load");
          }
        })
      }, options);

      slides.forEach(slide =>{
        slideObserver.observe(slide);
      })

    } else {
      window.addEventListener('load', setObserveReady(true));
      return () => window.removeEventListener('load', setObserveReady(true));
    }
  },[observeReady]);

  return <>{props.children}</>
};

export default SlideObserver;