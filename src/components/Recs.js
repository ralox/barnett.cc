import React from 'react';
import '../styles/recs.css';
import { useState } from 'react';


function Rec(props) {
  let isActive = false;
  let recDetails;

  if (props.recName === props.activeRec) {
    isActive = true;
    recDetails = (
      <div className="rec-detail">
        <header className="rec-name">{props.recName}</header>
        <div className="rec-title">{props.recTitle}</div>
        <div className="rec-quote">
          {props.recQuote}
        </div>
      </div>
    )
  } else {
    isActive = false;
    recDetails = null;
  }

  return (
    <div className={"rec-item " + (isActive ? "active":"")} onClick={props.makeActive(props.recName)}>
      <div className="rec-photo">
        <img src={process.env.PUBLIC_URL +  "/img/" + props.imgSrc} alt={"Former Coworker, " + props.recName}/>
      </div>
      {recDetails}
    </div>
  )
}

Rec.defaultProps = {
  imgSrc: "",
  recName: "",
  recTitle: "Former Coworker",
  recQuote: ""
}

export default function Recs() {
  const [activeRec, setActiveRec] = useState({});

  const makeActive = recName => () => setActiveRec(recName);
  
  /* 
  TODO: 
    - Add hover states to portrait images
    - Add mild animation/transitions to smooth out the interaction
    - Reduce vertical wiggle
  */
  /* 
  BONUS:
    - Have each page load randomly select a recommendation to highlight
    - Build the list via data rather than repeating the tag
  */
  return (
    <section className="rec-wrapper">
      <div className="rec-list">
        <Rec 
          recName="James Hills"
          imgSrc="james.png"
          recTitle="Senior Product Designer - Mosaic"
          recQuote="His understanding of design systems and reusable interactive components are some of the best I've seen. I was fortunate to learn quite a bit from Dave over the last year."
          activeRec={activeRec}
          makeActive={makeActive}
        />
        <Rec 
          recName="Heather McGeachy"
          imgSrc="heather.png"
          recTitle="Senior UX Researcher - Google"
          recQuote="What I have found to be most awesome about Dave is his ability to put forth his very best work and to be receptive to critique of that work. His easy going nature makes him a good fit in any team. I have enjoyed seeing his insanely creative solutions to visual problems!"
          activeRec={activeRec}
          makeActive={makeActive}
        />
        <Rec 
          recName="John Woodruff"
          imgSrc="john.png"
          recTitle="Senior Software Engineer - Mosaic"
          recQuote="Dave is one of the best designers I've ever worked with... As both a designer and a person I would work with Dave again in a heartbeat."
          activeRec={activeRec}
          makeActive={makeActive}
        />
        <Rec 
          recName="Domenic Taft"
          imgSrc="dom.png"
          recTitle="Product Designer - Mosaic"
          recQuote="Dave is one of the most impressive and intelligent designers I’ve ever worked with... I am a far better designer for working alongside him."
          activeRec={activeRec}
          makeActive={makeActive}
        />
      </div>
    </section>
  )
}