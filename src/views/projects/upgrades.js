import React from 'react';
import '../../styles/project.css';
import '../../styles/upgrades.css';
import SlideObserver from '../../utils/SlideObserver';



export default function Upgrades() {
  return (
    <SlideObserver>
      <div className="page-wrapper">
        <article className="upgrades project">
          <div className="project-intro" style={{backgroundImage: "url(" + process.env.PUBLIC_URL + "/img/upgrades.png)"}}>
            <h2 className="project-title">Vehicle Merchandising: Included Upgrades</h2>
            <div className="project-subtitle">Multi-Feature Strategy @ Cox Automotive</div>
            <div className="project-summary">
              Supercharged dealer merchanising through automated vehicle highlights which enable busy dealers to tell unique stories 
              for every vehicle on their lot while providing shoppers with greater confidence in pricing transparency.
            </div>
          </div>

          <section className="slide-wrapper">
            <div className="slide txt-img">
              <div className="slide-notes">
                <h3>Interested?</h3>
                <p>
                  I'm currently working on telling this story and I may be limited in what details I can share publicly.
                </p>
                <p>
                  If you're interested in hearing more about the process, insights, and outcomes, please contact me.
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