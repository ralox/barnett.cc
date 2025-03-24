import React from 'react';
import '../../styles/project.css';
import '../../styles/wholesale-pricing.css';
import SlideObserver from '../../utils/SlideObserver';



export default function WholesalePricing() {
  return (
    <SlideObserver>
      <div className="page-wrapper">
        <article className="wholesale-pricing project">
          <div className="project-intro" style={{backgroundImage: "url(" + process.env.PUBLIC_URL + "/img/wholesale-pricing.png)"}}>
            <h2 className="project-title">Wholesale Auto: Pricing Strategy</h2>
            <div className="project-subtitle">Internal Tools @ Cox Automotive</div>
            <div className="project-summary">
              Optimized administrator tooling to highlight critical data points and better reflect market conditions, 
              reducing the time spent on manual pricing by 15% and driving additional units to auction. 
            </div>
          </div>
          
          <section className="slide-wrapper">
            <div className="slide txt-img">
              <div className="slide-notes nda-locked">
                <h3>Non-Disclosure Agreement</h3>
                <p>
                  This project falls under an active NDA. More information about the process, insights, and outcomes may be shared in an interview setting.
                </p>
              </div>
            </div>
          </section>

          {/*
          <section className="slide-wrapper reflections">
            <div className="slide txt-solo">
              <div className="slide-notes">
                <h3>Reflections</h3>
                <ul>
                  <li>
                    <em className="good-highlight"> Thinking</em> happy thoughts.
                  </li>
                </ul>
              </div>
            </div>
          </section>
          */}
        </article>
      </div>
    </SlideObserver>
  );
}