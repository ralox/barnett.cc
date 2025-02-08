import React from 'react';
import '../styles/recs.css';
import { useState, useEffect } from 'react';


function Rec(props) {
  
  let isActive = false;

  if (props.id === props.activeRec) {
    isActive = true;
  } else {
    isActive = false;
  }

  return (
    <button aria-controls="rec-detail" key={props.id} className={"rec-item " + (isActive ? "active":"")} onClick={props.makeActive(props.id)}>
      <div className="rec-photo">
        <img src={process.env.PUBLIC_URL +  "/img/" + props.imgSrc} alt={"Former Coworker, " + props.recName}/>
      </div>
    </button>
  )
}

function RecDetail(props) {
  return (
    <div id="rec-detail" className="rec-detail">
      <div className="rec-name">{props.activeRec.recName}</div>
      <div className="rec-title">{props.activeRec.recTitle}</div>
      <p className="rec-quote">
        {props.activeRec.recQuote}
      </p>
    </div>
  )
}

Rec.defaultProps = {
  id: null,
  imgSrc: "",
  recName: "",
  recTitle: "Former Coworker",
  recQuote: ""
}

export default function Recs() {
  const [observeReady, setObserveReady] = useState(false);
  const [activeRec, setActiveRec] = useState(null);
  const makeActive = id => () => setActiveRec(id);
  const recList = [
    {
      id: 0,
      recName:"James Hills",
      imgSrc:"james.png",
      recTitle:"Senior UX/UI Designer - Crowdstrike",
      recQuote:"His understanding of design systems and reusable interactive components are some of the best I've seen. I was fortunate to learn quite a bit from Dave over the last year."
    },
    {
      id: 1,
      recName:"Heather McGeachy",
      imgSrc:"heather.png",
      recTitle:"Research Strategist - Google",
      recQuote:"[Dave's] easy going nature makes him a good fit in any team. I have enjoyed seeing his insanely creative solutions to visual problems!"
    },
    {
      id: 2,
      recName:"John Woodruff",
      imgSrc:"john.png",
      recTitle:"Senior Software Engineer - Mosaic",
      recQuote:"Dave is one of the best designers I've ever worked with... As both a designer and a person I would work with Dave again in a heartbeat."
    },
    {
      id: 3,
      recName:"Domenic Taft",
      imgSrc:"dom.png",
      recTitle:"Senior Product Designer - Endpoint",
      recQuote:"Dave is one of the most impressive and intelligent designers I've ever worked with... I am a far better designer for working alongside him."
    },
    {
      id: 4,
      recName:"Jeffrey Riggle",
      imgSrc:"riggle.png",
      recTitle:"Staff Software Engineer - Mosaic",
      recQuote:"Dave is an absolute rockstar designer. He has an unbelievable talent for taking complex and abstract problems and boiling them down to solid, well understood, and high fidelity mocks."
    },
  ]

  useEffect(() => {
    if (observeReady) {
      const recElm = document.querySelector(".rec-wrapper");
      const options = {
        root: null,
        threshold: 0.5,
        rootMargin: "0px"
      };
      let newRec = null;
      
      const recObserver = new IntersectionObserver(function(entries, recObserver) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            newRec++;

            if ( newRec >= recList.length ) {
              newRec = 0;
            }

            setActiveRec(newRec);
          }
        })
      }, options);

      recObserver.observe(recElm);
    } else {
      window.addEventListener('load', setObserveReady(true));
      return () => window.removeEventListener('load', setObserveReady(true));
    }
  },[observeReady, recList.length]);
  
  return (
    <section className="rec-wrapper">
      <div className="rec-list">
        {
          recList.map(person => 
            <Rec 
              key={person.id}
              id={person.id}
              recName={person.recName}
              imgSrc={person.imgSrc}
              activeRec={activeRec}
              makeActive={makeActive}
            />
          )
        }
      </div>
      { activeRec!==null &&
        <div className="rec-detail-wrapper">
          <RecDetail 
            activeRec={recList[activeRec]}
          />
        </div>
      }
    </section>
  )
}