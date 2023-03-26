import * as React from 'react';

const THRESHOLD = 0;

const CheckScroll = () => {
  const [scrollDirection, setScrollDirection] = React.useState('up');
  const [isScrolling, setIsScrolling] = React.useState(false);

  const blocking = React.useRef(false);
  const prevScrollY = React.useRef(0);
  const scrollTimer = React.useRef(null);

  React.useEffect(() => {
    prevScrollY.current = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - prevScrollY.current) >= THRESHOLD) {
        const newScrollDirection =
          scrollY > prevScrollY.current ? 'down' : 'up';

        setScrollDirection(newScrollDirection);
        setIsScrolling(true);

        scrollTimer.current = setTimeout(() => {
          setIsScrolling(false);
        }, 500);

        prevScrollY.current = scrollY > 0 ? scrollY : 0;
      }

      blocking.current = false;
    };

    const onScroll = () => {
      if (!blocking.current) {
        blocking.current = true;
        window.requestAnimationFrame(updateScrollDirection);
      }
      return blocking.current;
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      if ( scrollTimer.current ) {
        clearTimeout(scrollTimer.current);
      }
    };
  }, [scrollDirection]);

  
  React.useEffect(() => {

  }, [isScrolling])
  

  return {'scrollDirection': scrollDirection, 'isScrolling': isScrolling};
};

export { CheckScroll };